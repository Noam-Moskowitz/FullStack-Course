import React, { useState } from 'react'
import './login.css'
import UserAuth from '../../models/UserAuth';
import classNames from 'classnames';


export default function Login() {

  const [user, setUser] = useState(new UserAuth())

  const [status, setStatus] = useState(null);

  const [errors, setErrors] = useState(null);


  const handleChange = (e) => {
    const currUser = new UserAuth(user.email, user.password);
    currUser.updateField(e.target.name, e.target.value)


    setUser(currUser)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hardcodedUser = {
      email: `noammz101@gmail.com`,
      password: `qwerty123`
    };

    if (validatedForm()) {
      if (hardcodedUser.email === user.email &&
        hardcodedUser.password === user.password) {
        setStatus(true)
      } else {
        setStatus(false)
      }
    }

  }

  const validatedForm = () => {
    let formIsValid = true;
    const formErrors = {};

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user.email)) {
      formErrors['email'] = "Please enter a valid email address";
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid
  }

   const messageStyle={
    color: status ? 'green':'red'
  }
  /* const messageClass=`${!status?"error-display":'succes'}`; */
      const msgClass=classNames({
        'error-display': !status,
        'success':status
    })


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
        <div className='error-display'>
          {errors && errors['email']}
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
          className='submit-btn'
          type="submit"
          value="Submit"
        />

      </form>


      {status != null && (
        <div className={msgClass}>
          {status === true && 'SUCCESS'}
          {status === false && 'FAIL'}
        </div>
      )}
    </div>

  )
}
