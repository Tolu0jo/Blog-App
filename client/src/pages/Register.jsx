import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder='Username' required/>
                <input type="email" placeholder='email' required/>
                <input type="password" placeholder='Password' required/>
                <input type="password" placeholder='Confirm Password' required/>
                <button>Login</button>
                <p>This is an error!</p>
                <span>Do you have an account?<Link to ="/login">Register</Link></span>
            </form>
            </div>
      )
    
}

export default Register