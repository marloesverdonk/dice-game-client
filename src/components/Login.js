import React from 'react'
import '../style/Form.css'

export default class Login extends React.Component {

  render() {
    // if (this.props.jwt) return 'user is logged in'
    return (
      <div className="container">
        <form onSubmit={this.props.onSubmit} className="form login">
          <h1>Log in</h1>
          <label><b>Email</b></label>
          <input
            name='email'
            type='text'
            onChange={this.props.onChange}
            value={this.props.values.email}
            placeholder='email'
          ></input>
          <label><b>Password</b></label>
          <input
            name='password'
            type='text'
            onChange={this.props.onChange}
            value={this.props.values.password}
            placeholder='password'
          ></input>
          <button className="submitbtn" type='submit'>Login</button>
        </form>
      </div>)
  }
}

