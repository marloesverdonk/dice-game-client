import React from 'react'

export default function Signup(props){
    return( <div>
      <form onSubmit={props.onSubmit}>
        <input
          name='username'
          type='text'
          onChange={props.onChange}
          value={props.values.username}
          placeholder='username'
        ></input>
         <input
          name='email'
          type='text'
          onChange={props.onChange}
          value={props.email}
          placeholder='email'
        ></input>
        <input
          name='password'
          type='text'
          onChange={props.onChange}
          value={props.values.password}
          placeholder='password'
        ></input>
        <button type='submit'>Signup</button>
      </form>
    </div>)
  }
