import * as React from 'react';
import {useState} from "react";
import { useAuth } from "../context/authContext"
import { Link, useNavigate } from "react-router-dom"
import { Alert } from './Alert';

const Login = () =>{

      const[user, setUser] = useState({
            email: "",
            password: ""
      })

      const { login, loginWithGoogle, resetPassword } = useAuth()
      const navigate = useNavigate()
      const  [error, setError] = useState()

      const handleChange = ({target: {name, value}}) => {
            //console.log(name, value)
            setUser({...user, [name]: value})
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            setError("")
            try {
                  await login(user.email, user.password)
                  navigate("/11_socialnetwork/")
            } catch (error) {
                  setError(error.message)
            }
      }

      const HandleLoginGoogle = async() => {
            try {
                  await loginWithGoogle()
            navigate("/11_socialnetwork/")
            } catch (error) {
                  setError(error.message)
            }
      }

      const handleResetPassword = async () =>{
            if(!user.email) return setError("Please enter your email")

            try {
                  await resetPassword(user.email);
                  setError("we sent you an email with a link to reset your password")
            } catch (error) {
                  setError(error.message)
            }

      }

      return(
      <div className='w-full max-w-xs m-auto'>
      {error && <Alert message={error}/>}
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>

            <div className='mb-4'>
                  <label htmlFor="email" className='block text-gray-700 text-sm font-fold mb-2'>Email</label>
                  <input type="email" name="email" id="email" placeholder="email@server.com" onChange={handleChange} className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>

            <div className='mb-4'>
                  <label htmlFor="password" className='block text-gray-700 text-sm font-fold mb-2'>Ingresa tu contraseña</label>
                  <input type="password" name="password" id="password" placeholder="******" onChange={handleChange} className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'className='shadow appareance-non border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            </div>
<div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>

            <a href='#!' className='inline-block align-baseline font-bold text-sm text-blue-500' onClick={handleResetPassword}>Forgot Password</a>
</div>
      </form> 

      <p className='my-4 text-sm flex justify-between px-3'>Don't have an account? <Link to='/11_socialnetwork/register'>Register</Link></p>

      <button onClick={HandleLoginGoogle} className='bg-red-600 hover:bg-red-500 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full'>Login with Google</button>
      </div>
      )
}

export  default Login