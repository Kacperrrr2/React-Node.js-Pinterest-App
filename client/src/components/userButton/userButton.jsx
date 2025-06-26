import React, { useState } from 'react'
import "./userButton.css"
import ImageCustom from '../image/image';
import apiRequest from '../../utils/apiRequest';
import {Link, useNavigate} from 'react-router'
import useAuthStore from '../../utils/authStore';
const UserButton=() => {

const naviagte=  useNavigate()

const {currentUser, removeCurrentUser} = useAuthStore()
console.log(currentUser)

const handleLogout= async()=>{
  try {
    await apiRequest.post("users/auth/logout" , {})
    removeCurrentUser()
    
    naviagte("/auth")
  } catch (error) {
    console.log(error)
    
  }
}
  const [open, setOpen]=useState(false);
  return currentUser ? (
    <div className="userButton">
    <ImageCustom path={currentUser.img || "/general/noAvatar.png"} alt=''/>
    <div onClick={()=>setOpen((prev)=>!prev)}>
    <ImageCustom 
    path='/general/arrow.svg'
    alt='' 
    className='arrow'/>
    </div>
    {open &&
    <div className="userOptions">
      <div className="userOption">Profile</div>
      <div className="userOption">Setting</div>
      <div className="userOption" onClick={handleLogout}>Logout</div>
    </div>}
    </div>
    
  ):(<Link to='/auth' className='loginLink'>
    Login / Sign Up
    </Link>
  );
};

export default UserButton;