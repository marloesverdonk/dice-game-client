import React, { Component } from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { sendAction, loadRoom, roomFetched } from '../actions/game'
import { url } from '../contants'
import diceImg1 from '../style/dice-1.png'
import diceImg2 from '../style/dice-2.png'
import diceImg3 from '../style/dice-3.png'
import diceImg4 from '../style/dice-4.png'
import diceImg5 from '../style/dice-5.png'
import diceImg6 from '../style/dice-6.png'

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

  dice = (number, id) => {
    console.log('Hello world', number)
    if (number === 1) {
      console.log('Dice 1')
      return <img src={diceImg1} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 2) {
      console.log('Dice 2')
      return <img src={diceImg2} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 3) {
      console.log('Dice 3')
      return <img src={diceImg3} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 4) {
      console.log('Dice 4')
      return <img src={diceImg4} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 5) {
      console.log('Dice 5')
      return <img src={diceImg5} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 6) {
      console.log('Dice 6')
      return <img src={diceImg6} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else {
      return null
    }
  }


  render() {
    return (<div>

      <Game
        rollDice={this.rollDice}
        holdScore={this.holdScore}
        room={this.props.room}
        dice={this.dice}

      />
    </div>)
  }
}

const mapStateToProps = state => ({
  room: state.room
})

export default connect(mapStateToProps, { sendAction, loadRoom, roomFetched })(GameContainer);

