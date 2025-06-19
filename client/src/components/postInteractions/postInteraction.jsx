import React from 'react'
import './postInteraction.css'
import ImageCustom from '../image/image'

function PostInteraction() {
  return (
    <div className="postInteraction">
      <div className="interactionIcons">
        <ImageCustom path='/general/react.svg' alt=""/>
      273
       <ImageCustom path='/general/share.svg' alt=""/>
        <ImageCustom path='/general/more.svg' alt=""/>
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteraction