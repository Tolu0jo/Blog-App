import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../axios'
import { AuthContext } from '../context/authContext'

const Login = () => {
  const [inputs, setInputs] = useState({
    identifier: "",
    password: "",
})
const [error, setError] = useState(null)
const navigate =useNavigate();

const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
}
const {login}= useContext(AuthContext)
 
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
         await login(inputs)
        //  .then( (res)=>toast.success(res.data.message))
       navigate("/")
    } catch (error) {
        console.log(error)
        //toast.error(error?.response?.data?.Error)
        setError(error.response.data.Error)
    }
}
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username or Email' name='identifier' onChange={handleChange}/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            <button type='submit'>Login</button>
            {error && <p>{error}</p>}
            <span>Don't have an account?<Link to ="/register">Register</Link></span>
        </form> 
        </div>
  )
}

export default Login