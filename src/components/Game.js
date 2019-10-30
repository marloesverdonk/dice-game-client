import React, { Component } from 'react';


class Game extends Component {
  render() {
    const value = this.props.room


    return (
      <div>
        {!value ? 'Loading...' :
          <div>
            <h1>Room name : {value.room_name}</h1>
            <h1>Dice1</h1>
            <h1>{value.current_dice1}</h1>
            <h1>Dice2</h1>
            <h1>{value.current_dice2}</h1>
            <button onClick={this.props.rollDice}>ROLL DICE</button>
            <button onClick={this.props.holdScore}>HOLD</button>
            <div className="player1">
              <h1>player 1</h1>
              <h1>Current Score</h1>
              <h1>{value.currenthand_player1}</h1>
              <h1>Total Score</h1>
              <h1>{value.player1_totalscore}</h1>
            </div>
            <div className="player2">
              <h1>player 2</h1>
              <h1>Current Score</h1>
              <h1>{value.currenthand_player2}</h1>
              <h1>Total Score</h1>
              <h1>{value.player2_totalscore}</h1>
            </div>
          </div>
        }

      </div>
    );
  }
}



export default Game