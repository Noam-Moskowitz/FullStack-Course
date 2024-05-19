import { React, useState } from 'react'
import UserAuth from '../../models/UserAuth';


const Register = () => {

    const [user, setUser] = useState(new UserAuth());
    const [errors, setErrors] = useState(null);


    const handleChange = (e) => {
        const currUser = new UserAuth(user.email, user.password);
        currUser.updateField(e.target.name, e.target.value)


        setUser(currUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const localErrors = user.validate();
        if (Object.keys(localErrors).length < 0) {
            console.log(`Succecfully register user: ${user.email}`);
        } else {
            setErrors(localErrors)
        }
    }



    return (
        <div className='form-styling'>
            <h1>Register</h1>
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
                <div className='error-display'>
                    {errors && errors['password']}
                </div>

                <input
                    className='submit-btn'
                    type="submit"
                    value="Submit"
                />

            </form>

        </div>
    )
}

export default Register
