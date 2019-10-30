import React from "react";
import * as request from 'superagent'
import { url } from '../contants'
import Login from "./Login";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";

class LoginFormContainer extends React.Component {
  state = { email: "", password: "" };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    request.post(`${url}/login`)
      .send({
        email: this.state.email,
        password: this.state.password
      })
      .then(result => this.props.login(result.body.jwt, result.body.userId))
      .catch(console.error)
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    console.log("loginc", this.props.token)
    return this.props.token.token ? (
      // If we have a token, redirect to Rooms
      <Redirect to="/rooms" />
    ) : (<div>
      <h1>Log in</h1>
      <Login
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth
  };
};

export default connect(
  mapStateToProps,
  { login }
)(LoginFormContainer);
