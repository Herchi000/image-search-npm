import { useState } from "react"
import ImageFrame from "./ImageFrame"

const Images = ({urlImage, urlImageLarge}) => {

    
    const [showFrame, setShowFrame] = useState(false)

    const openImage = (value) => {
        document.querySelector('body').style.overflowY = 'hidden';
        setShowFrame(value);
        
    }
    
    return(
        <div className="image-cell">
            <img src={urlImage} alt='thumbnail' className="image" onClick={() => openImage(true)}/>       
                {showFrame ? <ImageFrame close={openImage} urlImageLarge={urlImageLarge}/> : ""} 

        </div> 

    )

}

export default Images