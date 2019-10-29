import React, { Component } from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { updateCurrentDice } from '../actions/game'

class GameContainer extends Component {
  state = {
    dice1: 0,
    dice2: 0,
    roundScore: 0
  }


  rollDice = () => {
    let dice1 = Math.floor(Math.random() * 6) + 1
    console.log("DICE 1", dice1)
    let dice2 = Math.floor(Math.random() * 6) + 1
    console.log("DICE 2", dice2)
    let score = dice1 + dice2
    if (dice1 !== 1 && dice2 !== 1) {
      this.setState({
        dice1: dice1,
        dice2: dice2,
        roundScore: dice1 + dice2
      })
      this.props.updateCurrentDice(dice1, dice2, score)
    } else {
      this.setState({
        dice1: dice1,
        dice2: dice2,
        roundScore: 0
      })
      this.props.updateCurrentDice(0, 0, 0)
    }

  }

  render() {
    return <Game
      rollDice={this.rollDice}
      value={this.state}
    />
  }
}

export default connect(null, { updateCurrentDice })(GameContainer);