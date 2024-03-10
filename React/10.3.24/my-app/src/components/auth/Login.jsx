import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='form-styling'>
        <h1>Login</h1>
        <form className='loginForm' name='logIn'>
            <div className="input-container">
                <label htmlFor="logIn">Email:</label>
                <input type="email" form='logIn' />
            </div>
            <div className="input-container">
                <label htmlFor="logIn">Password:</label>
                <input type="password" form='logIn' />
            </div>

            <input htmlFor='logIn' type="submit" value="Submit" />

        </form>
    </div>
  )
}
