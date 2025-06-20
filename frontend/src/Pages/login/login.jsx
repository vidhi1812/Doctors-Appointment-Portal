import React from 'react'
import "./login.css"


const login = () => {
  return (
    <div>
      <form action="submit">
        <label>email </label>
    <input type='email' placeholder='Enter your Name'/>
   
   <label>Password </label>
    <input type='password' placeholder='Enter your password'/>



      </form>
    </div>
  )
}

export default login
