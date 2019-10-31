import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rooms from './Rooms'
import { createRoom, sendAction, roomsFetched } from '../actions/game'
import { url } from '../contants'


class RoomsContainer extends Component {
  state = {
    name: ""
  }

  source = new EventSource(`${url}/room`)

  componentDidMount() {
    //this.props.loadRooms()
    this.source.onmessage = event => {
      // console.log('onmessage roomscontainer', event.data)
      const rooms = JSON.parse(event.data)
      //   console.log(rooms)
      this.props.roomsFetched(rooms)
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const roomId = await this.props.createRoom(this.state.name, this.props.userId)
    console.log(roomId)
    this.props.history.push(`/rooms/${roomId}`)

  }

  updatePlayer = (id) => {
    console.log("toThePage", id)
    this.props.sendAction('updatePlayer', id)
    this.props.history.push(`/rooms/${id}`)
  }




  render() {
    return (
      <div>
        <Rooms
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          room={this.props.rooms}
          onClick={this.updatePlayer}
          toThePage={this.toThePage}
          roomId={!this.props.room ? 'waiting' : this.props.room}
        />
      </div>

    )


  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.id,
    rooms: state.rooms,
    room: state.room
  }
}
export default connect(
  mapStateToProps, { createRoom, roomsFetched, sendAction }
)(RoomsContainer);