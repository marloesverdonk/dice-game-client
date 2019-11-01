import React from 'react'
import { connect } from "react-redux";
import { login } from "../actions/auth";
import '../style/room.css'


class Rooms extends React.Component {
  onClick = () => {
    this.props.history.push('/')
  }



  render() {
    const rooms = this.props.room

    return (
      <div>
        <button onClick={this.onClick}>New player</button>
        <div className="add-room">
          <h1>Rooms</h1>
          <form onSubmit={this.props.onSubmit} className="inline">
            <input
              name='name'
              type='text'
              placeholder='Room name'
              onChange={this.props.onChange}
            ></input>
            <button type='submit'>Save</button>
          </form>
        </div>
        <div className="room-list">
          <h1>Rooms List</h1>
          {rooms === null ? <p>Loading...</p>
            : <ul>{rooms.map(room => <li key={room.id}>
              <b>{room.room_name}</b>  &nbsp; &nbsp;  ({room.room_status})
              <button className="join-btn" onClick={() => this.props.onClick(room.id)}>Join</button>
            </li>)}</ul>
          }
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { login }
)(Rooms);