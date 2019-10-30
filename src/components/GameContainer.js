import React, { Component } from 'react';
import Game from './Game'
import { connect } from 'react-redux'
import { sendAction } from '../actions/game'
// import { updateCurrentDice, totalScore, updateCurrentScore } from '../actions/game'
// import { updateCurrentPlayer } from '../actions/game'

class GameContainer extends Component {
  state = {
    dice1: 0,
    dice2: 0,
    roundScore: 0,
    // player1_id: 1,
    // player2_id: 2,
    // currenthand_player1: 0
  }

  rollDice = () => this.props.sendAction("roll")


  // {
  //   let dice1 = Math.floor(Math.random() * 6) + 1
  //   // console.log("DICE 1", dice1)
  //   let dice2 = Math.floor(Math.random() * 6) + 1
  //   //console.log("DICE 2", dice2)

  //   let score = dice1 + dice2

  //   if (dice1 !== 1 && dice2 !== 1) {
  //     this.setState({
  //       dice1: dice1,
  //       dice2: dice2,
  //       roundScore: dice1 + dice2,
  //     })
  //     this.props.updateCurrentDice(dice1, dice2, score)
  //     if (this.props.currentPlayer === 2) {
  //       this.props.updateCurrentScore(this.props.currentScore)
  //     }

  //   } else {
  //     this.setState({
  //       dice1: dice1,
  //       dice2: dice2,
  //       roundScore: 0,
  //     })
  //     this.props.updateCurrentPlayer(this.props.currentPlayer === this.props.player1_id ?
  //       this.props.player2_id : this.props.player1_id)
  //     this.props.updateCurrentDice(dice1, dice2, 0)

  //   }
  // }

  holdScore = () => this.props.sendAction("hold")
  // {
  //   // this.props.totalScore(this.props.currentScore, this.props.score)
  //   if (this.props.currentPlayer === 2) {
  //     console.log('GAMECONTAINER', this.props.currentScore, this.props.score)
  //     this.props.totalScore(this.props.currentScore, this.props.score)
  //   }
  //   // this.props.totalScore(this.props.currentScore, this.props.score)
  // }

  render() {
    return (<div>
      {/* {console.log(this.props.currentPlayer)} */}
      <Game
        rollDice={this.rollDice}
        value={this.state}
        currentPlayer={this.props.currentPlayer}
        holdScore={this.holdScore}
        score={this.props.score}
        currentScore={this.props.currentScore}
      />
    </div>)
  }
}

const mapStateToProps = state => ({
  currentPlayer: state.currentPlayer.currentPlayer,
  player1_id: state.currentPlayer.player1_id,
  player2_id: state.currentPlayer.player2_id,
  currentScore: state.dice.roundScore,
  score: state.dice.totalScore
})

export default connect(mapStateToProps, { sendAction })(GameContainer);

