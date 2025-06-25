import React, { useState } from 'react'
import ImageCustom from '../../components/image/image'
import './profilePage.css'
import Gallery from '../../components/gallery/gallery';
import Boards from '../../components/boards/boards';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import apiRequest from '../../utils/apiRequest';

function ProfilePage() {
  const [type,setType]=useState("saved");
  const{username} = useParams()
  const {isPending, error, data}= useQuery({
    queryKey:["pin", username],
    queryFn: ()=> apiRequest.get(`users/${username}`).then((res)=> res.data)
  })

  if (isPending) return "Loading..."
  if (error) return "Ann error has occuered: " +error.message
  if(!data) return "User not found!"


  return (
    <div className="profilePage">
       <ImageCustom w={100} h={100} className='profileImg'  src={data.img || "/general/noAvatar.png"} alt=''/>
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
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
      
      {type==="created" ? <Gallery userId={data._id}/> : <Boards userId={data._id}/>}
    </div>
  )
}

export default ProfilePage