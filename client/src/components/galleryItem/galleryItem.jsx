import React from 'react'
import "./galleryItem.css"
import { Link } from 'react-router';
import ImageCustom from '../image/image';
function GalleryItem({item}) {

  const optimizedHeight= (372 * item.height) / item.width
  return (
    <div className="galleryItem" style={{gridRowEnd:`span ${Math.ceil(item.height/100)}`}}>
        {/* <img src={item.media} alt=''/> */}
        <ImageCustom path={item.media} alt="" w={372} h={optimizedHeight}/>
        <Link to={`/pin/${item._id}`} className='overlay' />
        <button className='saveButton'>Save</button>
        <div className='overlayIcons'>
          <button>
            <ImageCustom path='/general/share.svg'/>
          </button>
          <button>
            <ImageCustom path='/general/more.svg'alt=''/>

          </button>
        </div>
    </div>
  )
}

export default GalleryItem;