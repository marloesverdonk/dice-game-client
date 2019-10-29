import React from 'react'

export default class Login extends React.Component {

  render() {
    // if (this.props.jwt) return 'user is logged in'
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            name='email'
            type='text'
            onChange={this.props.onChange}
            value={this.props.values.email}
            placeholder='email'
          ></input>
          <input
            name='password'
            type='text'
            onChange={this.props.onChange}
            value={this.props.values.password}
            placeholder='password'
          ></input>
          <button type='submit'>Login</button>
        </form>
      </div>)
  }
}

