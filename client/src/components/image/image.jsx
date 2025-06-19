import { IKImage } from 'imagekitio-react'
import React from 'react'

function ImageCustom ({path,alt,className,w,h}) 
{
  return (

    <IKImage urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
          path={path}
          transformation={[
            {
                height:h,
                width: w,
            },
          ]}
          alt={alt}
          loading='lazy'
          className={className}
          lqip={{active: true, quality: 20}}/>

  )
}

export default ImageCustom