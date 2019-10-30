import React, { Component } from 'react';
import { connect } from 'react-redux';
import Rooms from './Rooms'
import { createRoom, loadRooms, sendAction } from '../actions/game'


class RoomsContainer extends Component {
  state = {
    name: ''
  }


  componentDidMount() {
    this.props.loadRooms()
  }

  onChange = (event) => {
    console.log('From onChange')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createRoom(this.state.name, this.props.userId)
    console.log('From onSubmit')
    this.props.loadRooms()
  }

  updatePlayer = () => {
    console.log("this one?")
    this.props.sendAction('updatePlayer')
  }


  render() {
    console.log("loggedin?", this.props.userId)
    return <Rooms
      onChange={this.onChange}
      onSubmit={this.onSubmit}
      value={this.state}
      room={this.props.rooms}
      onClick={this.updatePlayer}
    />


  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.id,
    rooms: state.rooms
  }
}
export default connect(
  mapStateToProps, { createRoom, loadRooms, sendAction }
)(RoomsContainer);