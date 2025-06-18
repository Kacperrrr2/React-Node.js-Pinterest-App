import React from 'react'
import "./leftBar.css";
import ImageCustom from '../image/image';
function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <a href='/' className='menuIcon'>
        <ImageCustom path='/general/logo.png' alt=''/>
        </a>
        <a href='/' className='menuIcon'>
        <ImageCustom path='/general/home.svg' alt=''/>
        </a>
        <a href='/' className='menuIcon'>
        <ImageCustom path='/general/create.svg' alt=''/>
        </a>
        <a href='/' className='menuIcon'>
        <ImageCustom path='/general/updates.svg' alt=''/>
        </a>
        <a href='/' className='menuIcon'>
        <ImageCustom path='/general/messages.svg' alt=''/>
        </a>
      </div>
      <a href='/'className='menuIcon'>
        <ImageCustom path="/general/settings.svg" alt=''/>
      </a>
    </div>
  )
}

export default LeftBar