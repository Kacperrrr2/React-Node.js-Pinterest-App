import React from 'react'
import LeftBar from '../../components/leftBar/leftBar'
import TopBar from '../../components/topBar/topBar'
import Gallery from '../../components/gallery/gallery'
import "./mainLayout.css";
import { Outlet } from 'react-router';
function MainLayout() {
  return (
    <div className='app'>
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout