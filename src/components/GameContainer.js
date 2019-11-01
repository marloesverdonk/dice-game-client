import React, { Component } from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
    if (number === 1) {
      return <img src={diceImg1} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 2) {
      return <img src={diceImg2} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 3) {
      return <img src={diceImg3} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 4) {
      return <img src={diceImg4} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 5) {
      return <img src={diceImg5} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else if (number === 6) {
      return <img src={diceImg6} alt={`Dice-${number}`} className="dice" id={`dice-${id}`} />
    } else {
      return null
    }
  }


  restart = () => {
    this.props.history.push(`/rooms`)
    this.props.clearRoom()
  }


  activePlayer = (userId, turnPlayer, winnerPlayer) => {
    // console.log("ACTIVE", winnerPlayer)
    if (userId === turnPlayer) {
      return (
        <div>
          <button className="btn-roll" onClick={this.rollDice}><i className="ion-ios-loop" />ROLL DICE</button>
          <button className="btn-hold" onClick={this.holdScore}><i className="ion-ios-download-outline" />HOLD</button>
        </div>
      )

    }
    // else if (winnerPlayer) {
    //   return <button className="btn-restart" onClick={this.restart}><i className="ion-ios-refresh" />Restart</button>
    // } 
    else if (winnerPlayer) {
      return null
    }
    else {
      return <h2>Wait for your turn...</h2>
    }
  }


  checkWinner = (winnerPlayer, userId) => {
    // console.log("Winner : ", winnerPlayer, "User Id :", userId)
    if (!winnerPlayer) {
      return null
    } else if (winnerPlayer === userId) {
      return <h1 className="winner">Winner</h1>
    }
  }


  render() {
    return (<div>

      <Game
        rollDice={this.rollDice}
        holdScore={this.holdScore}
        room={this.props.room}
        userId={this.props.userId}
        dice={this.dice}
        activePlayer={this.activePlayer}
        checkWinner={this.checkWinner}
      />
    </div>)
  }
}

const mapStateToProps = state => ({
  room: state.room,
  userId: state.auth.id
})

export default withRouter(connect(mapStateToProps, { sendAction, loadRoom, roomFetched })(GameContainer));

