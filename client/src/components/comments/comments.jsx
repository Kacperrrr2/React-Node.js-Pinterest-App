import React from 'react'
import ImageCustom from '../image/image'

function Comments() {
  return (
    <div className="comments">
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        {/* COMMENT */}
        <div className='comment'>
          <ImageCustom path="/gemeral/noAvatar.png" alt=""/>
          <div className="commentContent">
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Comments