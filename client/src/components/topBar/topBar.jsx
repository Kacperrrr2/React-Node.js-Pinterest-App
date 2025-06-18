import React from 'react'
import "./topBar.css";
import UserButton from '../userButton/userButton';
import ImageCustom from '../image/image';
function TopBar() {
  return (
    <div className='topBar'>
        <div className='search'>
        <ImageCustom path='/general/search.svg'/>
        <input type='text' placeholder='Search'/>
        </div>
        <UserButton/>
        
    </div>
  )
}

export default TopBar