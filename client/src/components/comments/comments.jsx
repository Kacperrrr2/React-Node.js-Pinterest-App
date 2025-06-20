import React, { useState } from 'react'
import ImageCustom from '../image/image'
import EmojiPicker from 'emoji-picker-react'
import "./comments.css"
function Comments() {
  const [open, setOpen]= useState(false)
  return (
    <div className="comments">
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        {/* COMMENT */}
        <div className='comment'>
          <ImageCustom path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              ghfui ewh gf uiowegiuiewf hjiopwhfow fehuwhfoi fewef fefe 
            </p>
            <span className='commentTime'>1h</span>
          </div>

        </div>
         {/* COMMENT */}
        <div className='comment'>
          <ImageCustom path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              ghfui ewh gf uiowegiuiewf hjiopwhfow fehuwhfoi fewef fefe 
            </p>
            <span className='commentTime'>1h</span>
          </div>

        </div>
         {/* COMMENT */}
        <div className='comment'>
          <ImageCustom path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              ghfui ewh gf uiowegiuiewf hjiopwhfow fehuwhfoi fewef fefe 
            </p>
            <span className='commentTime'>1h</span>
          </div>

        </div>
         {/* COMMENT */}
        <div className='comment'>
          <ImageCustom path="/general/noAvatar.png" alt=""/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              ghfui ewh gf uiowegiuiewf hjiopwhfow fehuwhfoi fewef fefe 
            </p>
            <span className='commentTime'>1h</span>
          </div>

        </div>
      </div>
      <form className='commentForm'>
        <input type='text' placeholder='Add a comment'/>
        <div className='emoji'>
          <div onClick={()=>setOpen((prev)=>!prev)}>😁</div>
        </div>
       { open&& <div className="emojiPicker">
          <EmojiPicker/>
        </div>}

      </form>
    </div>
  )
}

export default Comments