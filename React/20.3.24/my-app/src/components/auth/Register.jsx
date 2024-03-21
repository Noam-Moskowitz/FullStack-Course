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
        if (validatedForm()) {
            console.log(`Succecfully register user: ${user.email}`);
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

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{0,}$/;
        if (!passwordRegex.test(user.password)) {
            formErrors['password'] = "Password must contain at least one uppercase letter and a number";
            formIsValid = false;
        }



        setErrors(formErrors);
        return formIsValid
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
