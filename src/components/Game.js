import React, { Component } from 'react';
import '../style/Game.css'




class Game extends Component {

  render() {
    const value = this.props.room

    return (
      <div className="wrapper clearfix">

        {!value ? 'Loading...' :
          <div>
            <h1>Room name : {value.room_name}</h1>
            {this.props.dice(value.current_dice1, 1)}
            {this.props.dice(value.current_dice2, 2)}
            <button className="btn-roll" onClick={this.props.rollDice}><i className="ion-ios-loop" />ROLL DICE</button>
            <button className="btn-hold" onClick={this.props.holdScore}><i className="ion-ios-download-outline" />HOLD</button>
            <div className="player-1-panel">
              <div className="player-name">player 1</div>
              <div className="player-score">{value.player1_totalscore}</div>
              <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">{value.currenthand_player1}</div>
              </div>
            </div>
            <div className="player-2-panel">
              <div className="player-name">player 2</div>
              <div className="player-score">{value.player2_totalscore}</div>
              <div className="player-current-box">
                <div className="player-current-label">Current</div>
                <div className="player-current-score">{value.currenthand_player2}</div>
              </div>
            </div>
          </div>
        }

      </div>
    );
  }
}


export default Game