import React, { useState } from 'react'
import ImageCustom from '../../components/image/image'
import "./authPage.css"
import apiRequest from '../../utils/apiRequest';
import { useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';

function AuthPage() {
  const[isRegister,setIsRegister]= useState(false);
  const[error,setError]= useState("");

  const navigate= useNavigate()

  const {setCurrentUser}=useAuthStore()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)

    const data= Object.fromEntries(formData)


    try {
      const res = await apiRequest.post(`/users/auth/${isRegister ? "register" : "login"}`, data)
      navigate("/")
      setCurrentUser(res.data)
    } catch (error) {
      setError(error.response.data.message)
      
    }

   
  }
  return (
    <div className='authPage'>
      <div className="authContainer">
        <ImageCustom path="/general/logo.png" w={36} h={36} alt=''/>
        <h1>{isRegister? "Create an Account" : "Login to your account"}</h1>
        {isRegister ? (
          <form key='registerForm' onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor='username'>Username</label>
            <input type='username' placeholder='Username' required name='username' id='username'/>
          </div>
          <div className="formGroup">
            <label htmlFor='displayName'>Name</label>
            <input type='displayName' placeholder='displayName' required name='displayName' id='displayName'/>
          </div>

          <div className="formGroup">
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' required name='email' id='email'/>
          </div>

          <div className="formGroup">
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='password' required name='password' id='password'/>
          </div>

          <button type='submit'>Login</button>
          <p onClick={()=>setIsRegister(false)}>Don you have an account? <b>Login</b></p>
          {error && <p className='error'>{error}</p>}
        </form>)
         : 
        (<form key='loginForm' onSubmit={handleSubmit}>
          <div className="formGroup" >
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Email' required name='email' id='email'/>
          </div>
          <div className="formGroup">
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='password' required name='password' id='password'/>
          </div>
          <button type='submit'>Login</button>
          <p onClick={()=>setIsRegister(true)}>Don&apos;t have account? <b>Register</b></p>
          {error && <p className='error'>{error}</p>}
        </form>)}
      </div>
    </div>
  )
}

export default AuthPage