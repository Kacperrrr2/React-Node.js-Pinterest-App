import React from 'react'
import "./leftBar.css";
import ImageCustom from '../image/image';
import { Link } from 'react-router';
function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <Link to='/' className='menuIcon'>
        <ImageCustom path='/general/logo.png' alt=''/>
        </Link>
        <Link to='/' className='menuIcon'>
        <ImageCustom path='/general/home.svg' alt=''/>
        </Link>
        <Link to='/create' className='menuIcon'>
        <ImageCustom path='/general/create.svg' alt=''/>
        </Link>
        <Link to='/' className='menuIcon'>
        <ImageCustom path='/general/updates.svg' alt=''/>
        </Link>
        <Link to='/' className='menuIcon'>
        <ImageCustom path='/general/messages.svg' alt=''/>
        </Link>
      </div>
      <Link to='/'className='menuIcon'>
        <ImageCustom path="/general/settings.svg" alt=''/>
      </Link>
    </div>
  )
}

export default LeftBar