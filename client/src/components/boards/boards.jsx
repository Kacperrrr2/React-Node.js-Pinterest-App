import React from 'react'
import './boards.css'
import ImageCustom from '../image/image'
import { useQuery } from '@tanstack/react-query';
import apiRequest from '../../utils/apiRequest';
import {format} from "timeago.js"
import { Link } from 'react-router';
function Boards({userId}) {
    
    const {isPending, error, data}= useQuery({
    queryKey:["board", userId],
    queryFn: ()=> apiRequest.get(`boards/${userId}`).then((res)=> res.data)
  })

  if (isPending) return "Loading..."
  if (error) return "Ann error has occuered: " +error.message
  if(!data) return "User not found!"
  console.log(data)

  return (
    <div className="colletions">
        {/* COLLECTION */}
        {data?.map((board)=>
        (
            <Link to={`/search?boardId=${board._id}`} className="collection" key={board._id}>
                <ImageCustom src={board.firstPin.media} alt=''/>
                <div className="collectionInfo">
                    <h1>{board.title}</h1>
                    <span>{board.PinCount} Pins : {format(board.createdAt)}</span>

                </div>

            </Link>
        
        ))}
       
       
    </div>
  )
}

export default Boards