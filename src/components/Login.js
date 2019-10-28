import React from 'react'
import * as request from 'superagent'
import { url } from '../contants'
import { login } from '../actions/auth'
import { connect } from 'react-redux'
//import Validation from './Validation'

class Login extends React.Component {
  state = {
    email: "",
    password: ""
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
    request.post(`${url}/login`)
      .send({
        email: this.state.email,
        password: this.state.password
      })
      .then(result => this.props.login(result.body.jwt))
     // .then(this.props.jwt ? this.props.history.push('/rooms') : console.log('not valid')
     // )
      .catch(console.error)
    this.setState({
      email: "",
      password: ""
    })
    //if(this.props.jwt) return this.props.history.push('/rooms')
    this.props.history.push('/rooms')
   // console.log('jwt on submit', this.props.jwt)
    
  }

  render() {
    if (this.props.jwt) return 'user is logged in'
    return (
      <div>
        Login form
        <form onSubmit={this.onSubmit}>
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