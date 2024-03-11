import React, { useState } from 'react'
import './login.css'

export default function Login() {

  const [user, setUser] = useState({
    email: ``,
    password: ``
  })

  const [status, setStatus] = useState(``);


  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hardcodedUser = {
      email: `noammz101@gmail.com`,
      password: `qwerty123`
    };

    try {
      if (hardcodedUser.email === user.email &&
        hardcodedUser.password === user.password) {
        setStatus(`Login Succesful!`)
      } else {
        throw new Error(`Login Failed, Credentials Not Valid!`)
      }
    } catch (error) {
      setStatus(error.message)
    }

  }


  return (
    <div className='form-styling'>
      <h1>Login</h1>
      <form className='loginForm' onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id='email'
            name='email'
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name='password'
            id='password'
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Submit"
        />

      </form>

      <div>{status}</div>
    </div>
  )
}
