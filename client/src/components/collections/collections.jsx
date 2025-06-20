import React from 'react'
import './collections.css'
import ImageCustom from '../image/image'
function Collections() {
  return (
    <div className="colletions">
        {/* COLLECTION */}
        <div className="collection">
            <ImageCustom path='/pins/pin1.jpeg' alt=''/>
            <div className="collectionInfo">
                <h1>Minimalist Beddroms</h1>
                <span> 12 Pins . 1w</span>

            </div>
        </div>

        <div className="collection">
            <ImageCustom path='/pins/pin1.jpeg' alt=''/>
            <div className="collectionInfo">
                <h1>Minimalist Beddroms</h1>
                <span> 12 Pins . 1w</span>

            </div>
        </div>
    </div>
  )
}

export default Collections