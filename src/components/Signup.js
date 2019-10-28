import React from 'react'
import * as request from 'superagent'
import {url} from '../contants'

export default class Signup extends React.Component{
  state = {
    username: "",
    email: "",
    password: ""
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    request.post(`${url}/user`)
    .send({
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .catch(console.error)
    this.setState({
      username: "",
      email: "",
      password: ""
    })
    this.props.history.push('/login')
  }

  render(){
    return( <div>
      Signup form
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          type='text'
          onChange={this.onChangeUsername}
          value={this.state.username}
          placeholder='username'
        ></input>
         <input
          name='email'
          type='text'
          onChange={this.onChangeEmail}
          value={this.state.email}
          placeholder='email'
        ></input>
        <input
          name='password'
          type='text'
          onChange={this.onChangePassword}
          value={this.state.password}
          placeholder='password'
        ></input>
        <button type='submit'>Signup</button>
      </form>
    </div>)
  }
}