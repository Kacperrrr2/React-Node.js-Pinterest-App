import React from 'react'
import ImageCustom from '../image/image'

function Layers() {
    return (
        <div className='layers'>
            <div className="layersTitle">
                <h3>Layers</h3>
                <p>Select a layer to edit</p>
            </div>
            <div className="layer">
                <div className="layerImage">
                    <ImageCustom path="/general/text.png" alt=""/>
                    <span>Add Text</span>
                    
                </div>
            </div>
            <div className="layer">
                <div className="layerImage" style={{backgroundColor: "teal"}}></div>
                   
                    <span>Canvas</span>
                
            </div>
        </div>
    )
}

export default Layers