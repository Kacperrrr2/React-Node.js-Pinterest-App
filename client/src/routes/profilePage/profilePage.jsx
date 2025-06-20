import React, { useState } from 'react'
import ImageCustom from '../../components/image/image'
import './profilePage.css'
import Gallery from '../../components/gallery/gallery';
import Collections from '../../components/collections/collections';

function ProfilePage() {
  const [type,setType]=useState("saved");
  return (
    <div className="profilePage">
      <ImageCustom className='profileImg' w={100} h={100} path='/general/noAvatar.png' alt=''/>
      <h1 className='profileName'>John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className="followCounts"> 10 followers . 20 followings</div>
      <div className="profileInteractions">
        <ImageCustom path='/general/share.svg' alt=''/>
      <div className="profileButtons">
        <button>Message</button>
        <button>Follow</button>
      </div>
        <ImageCustom path='/general/more.svg' alt=''/>
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType("created")} className={type==="created" ? "active" : ""}>Created</span>
        <span onClick={()=>setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
      </div>
      {type==="created" ? <Gallery/> : <Collections/>}
    </div>
  )
}

export default ProfilePage