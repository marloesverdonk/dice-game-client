import React from 'react'
import { connect } from "react-redux";
import { login } from "../actions/auth";

class Rooms extends React.Component {
  onClick = () => {
    this.props.login("");
    this.props.history.push('/')
  }

  render() {
    return (<div>
      <button onClick={this.onClick}>New player</button>
      <h1>Rooms</h1>
    </div>)
  }
}

export default connect(
  null,
  { login }
)(Rooms);