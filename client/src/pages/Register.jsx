import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../axios'
const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState(null)
    const navigate =useNavigate();
    
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await api.post("/users/signup", inputs)
            //  .then( (res)=>toast.success(res.data.message))
           navigate("/login")
        } catch (error) {
            console.log(error)
            //toast.error(error?.response?.data?.Error)
            setError(error.response.data.Error)
        }
    }
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form >
                <input type="text" placeholder='Username' name="username" onChange={handleChange} />
                <input type="email" placeholder='email' name="email" onChange={handleChange} />
                <input type="password" placeholder='Password' name="password" onChange={handleChange} />
                <input type="password" placeholder='Confirm Password' name="confirmPassword" onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                {error && <p>{error}</p>}
                <span>Already have an account?<Link to="/login">Login</Link></span>
            </form>
        </div>
    )

}

export default Register