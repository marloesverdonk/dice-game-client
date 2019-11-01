import React from 'react'
import * as request from 'superagent'
import { url } from '../contants'
import SignUp from './Signup'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

class SignupContainer extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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

  render() {
    return (<div>
      <Link to="/login"> Login</Link>
      <SignUp
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />

    </div>)
  }
}

export default connect(
  null,
  { login }
)(SignupContainer);