import React, { useState } from 'react'
import "./userButton.css"
const UserButton=() => {
const currentUser=true
  const [open, setOpen]=useState(false);
  return currentUser ? (
    <div className="userButton">
    <ImageCustom path='/general/noAvatar.png' alt=''/>
    <ImageCustom 
    onClick={()=> setOpen((prev)=>!prev)}
    path='/general/arrow.svg'
    alt='' 
    className='arrow'/>
    {open &&
    <div className="userOptions">
      <div className="userOption">Profile</div>
      <div className="userOption">Setting</div>
      <div className="userOption">Logout</div>
    </div>}
    </div>
  ):(<a href='/' className='loginLink'>
    Login / Sign Up
    </a>
  );
};

export default UserButton;