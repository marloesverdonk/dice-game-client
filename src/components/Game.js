import React, { Component } from 'react';

class Game extends Component {
  render() {
    const value = this.props.value
    return (
      <div>
        <h1>Play game</h1>
        <h1>Dice1</h1>
        <h1>{value.dice1}</h1>
        <h1>Dice2</h1>
        <h1>{value.dice2}</h1>
        <h1>Round Score</h1>
        <h1>{value.roundScore}</h1>
        <button onClick={this.props.rollDice}>ROLL DICE</button>
        <button>HOLD</button>
        <h1>Current Player</h1>
        <h1>{this.props.currentPlayer}</h1>
      </div>
    );
  }
}

export default Game;