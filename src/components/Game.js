import React, { Component } from 'react';

class Game extends Component {
  render() {
    const value = this.props.value
    // console.log('GAME', value)
    return (
      <div>
        <h1>Play game</h1>
        <h1>Dice1</h1>
        <h1>{value.dice1}</h1>
        <h1>Dice2</h1>
        <h1>{value.dice2}</h1>
        <h1>Current Score</h1>
        <h1>{this.props.currentScore}</h1>
        <h1>Total Score</h1>
        <h1>{this.props.score}</h1>
        <button onClick={this.props.rollDice}>ROLL DICE</button>
        <button onClick={this.props.holdScore}>HOLD</button>

        <h1>Current Player</h1>
        <h1>{this.props.currentPlayer}</h1>


      </div>
    );
  }
}

export default Game;