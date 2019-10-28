import React from 'react'
//import * as request from 'superagent'
//import { url } from '../constants'
import { login } from '../actions/auth'
import { connect } from 'react-redux'

class Login extends React.Component {
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
    // request.post(`${url}/login`)
    //   .send({
    //     username: this.state.username,
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(result => this.props.login(result.body.jwt))
    //   .catch(console.error)
    // this.setState({
    //   username: "",
    //   email: "",
    //   password: ""
    // })
    console.log('onSubmit')
  }

  render() {
    if (this.props.jwt) return 'user is logged in'
    return (
      <div>
        Login form
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
          <button type='submit'>Login</button>
        </form>
      </div>)
  }
}
function mapStateToProps(reduxState) {
  return {
    jwt: reduxState.auth
  }
}
export default connect(mapStateToProps, { login })(Login)