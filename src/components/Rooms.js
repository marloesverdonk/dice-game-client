import React from 'react'
import { connect } from "react-redux";
import { login } from "../actions/auth";
import '../style/room.css'
import { withRouter } from 'react-router-dom'


class Rooms extends React.Component {
  onClick = () => {
    this.props.history.push('/')
  }

  render() {
    const rooms = this.props.room

    return (
      <div className="rooms">
        <button onClick={this.onClick} className="new-player">New player</button>
        <div className="add-room">
          <form onSubmit={this.props.onSubmit} className="inline">
            <h3>Create room</h3>
            <label>Room name: </label>
            <input
              className="room-name"
              name='name'
              type='text'
              onChange={this.props.onChange}
            ></input>
            <button type='submit'>Save</button>
          </form>
        </div>
        <div className="room-list">
          <h1>Rooms</h1>
          {rooms === null ? <p>Loading...</p>
            : <ul>{rooms.map(room => <li key={room.id} className="rooms">
              <p className="room-name">{room.room_name}</p>
              <p className="room-status">({room.room_status})</p>
              <button className="join-btn" onClick={() => this.props.onClick(room.id)}>Join</button>
            </li>)}</ul>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  null,
  { login }
)(Rooms));