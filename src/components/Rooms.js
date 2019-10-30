import React from 'react'
import { connect } from "react-redux";
import { login } from "../actions/auth";



class Rooms extends React.Component {
  onClick = () => {
    this.props.login("");
    this.props.history.push('/')
  }


  render() {
    const rooms = this.props.room
    // console.log("Rooms", rooms)
    return (
      <div>
        <button onClick={this.onClick}>New player</button>
        <h1>Rooms</h1>
        <form onSubmit={this.props.onSubmit}>
          <input
            name='name'
            type='text'
            placeholder='Room name'
            onChange={this.props.onChange}
          ></input>
          <button type='submit'>Save</button>
          <h1>Rooms List</h1>
          {rooms === null ? <p>Loading...</p>
            : <ul>{rooms.map(room => <li key={room.id}>
              {room.room_name}{room.room_status}
              <button onClick={this.props.onClick}>Join</button>
            </li>)}</ul>
          }
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { login }
)(Rooms);