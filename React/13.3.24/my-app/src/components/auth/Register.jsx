import {React, useState} from 'react'
import UserAuth from '../../models/UserAuth';


const Register = () => {

    const [user, setUser] = useState( new UserAuth())

    
    const handleChange = (e) => {
        const currUser= new UserAuth(user.email, user.password);
        currUser.updateField(e.target.name,e.target.value)


        setUser(currUser)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user.email, user.password);
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

        </div>
    )
}

export default Register
