import React, { useState } from 'react'
import "./userButton.css"
import ImageCustom from '../image/image';
const UserButton=() => {
const currentUser=true
  const [open, setOpen]=useState(false);
  return currentUser ? (
    <div className="userButton">
    <ImageCustom path='/general/noAvatar.png' alt=''/>
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
      <div className="userOption">Logout</div>
    </div>}
    </div>
  ):(<a href='/' className='loginLink'>
    Login / Sign Up
    </a>
  );
};

export default UserButton;