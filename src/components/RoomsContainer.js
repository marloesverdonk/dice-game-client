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
    // console.log('From onChange')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createRoom(this.state.name, this.props.userId)

  }

  updatePlayer = (id) => {
    this.props.sendAction('updatePlayer', id)
    this.props.history.push(`/rooms/${id}`)
  }




  render() {
    return <Rooms
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      value={this.state}
      room={this.props.rooms}
      onClick={this.updatePlayer}
      toThePage={this.toThePage}
    />


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