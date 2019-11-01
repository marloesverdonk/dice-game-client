import React from 'react'
import '../style/Form.css'

export default function Signup(props) {
  return (
    <div className="container">
      <form onSubmit={props.onSubmit} className="form sign-up">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label><b>User Name</b></label>
        <input
          name='username'
          type='text'
          onChange={props.onChange}
          value={props.values.username}
          placeholder='username'
        ></input>
        <label><b>Email</b></label>
        <input
          name='email'
          type='text'
          onChange={props.onChange}
          value={props.email}
          placeholder='email'
        ></input>
        <label><b>Password</b></label>
        <input
          name='password'
          type='text'
          onChange={props.onChange}
          value={props.values.password}
          placeholder='password'
        ></input>
        <button className="submitbtn" type='submit'>Signup</button>
      </form>
    </div>)
}
