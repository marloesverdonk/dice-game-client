import React, { Component } from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { sendAction, loadRoom, roomFetched } from '../actions/game'
import { url } from '../contants'

class GameContainer extends Component {
  state = {
    dice1: 0,
    dice2: 0,
    roundScore: 0
  }

  source = new EventSource(`${url}/room`)

  componentDidMount() {
    //this.props.loadRooms()
    this.source.onmessage = event => {
      // console.log('onmessage roomscontainer', event.data)
      const rooms = JSON.parse(event.data)
      //   console.log(rooms)
      //   this.props.roomsFetched(rooms)
      const myRoom = rooms.find(room => room.id === parseInt(this.props.match.params.id))
      this.props.roomFetched(myRoom)
     // console.log(typeof this.props.match.params.id, this.props.match.params.id)
    }
  }

  // componentDidMount() {
  //   this.props.loadRoom(this.props.match.params.id)
  // }

  rollDice = () => this.props.sendAction("roll", this.props.room.id)

  holdScore = () => this.props.sendAction("hold", this.props.room.id)

  render() {
    return (<div>

      <Game
        rollDice={this.rollDice}
        //value={this.state}
        //currentPlayer={this.props.currentPlayer}
        holdScore={this.holdScore}
        // score={this.props.score}
        //currentScore={this.props.currentScore}
        room={this.props.room}
      />
    </div>)
  }
}

const mapStateToProps = state => ({
  room: state.room
})

export default connect(mapStateToProps, { sendAction, loadRoom, roomFetched })(GameContainer);

