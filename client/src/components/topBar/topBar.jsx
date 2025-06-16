import React from 'react'
import "./topBar.css";
import UserButton from '../userButton/userButton';
function TopBar() {
  return (
    <div className='topBar'>
        <div className='search'>
        <img src='/general/search.svg'/>
        <input type='text' placeholder='Search'/>
        </div>
        <UserButton/>
        
    </div>
  )
}

export default TopBar