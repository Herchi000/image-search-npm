
const ImageFrame = ({close, urlImageLarge}) => {

    const closeFrame = () => {
        close(false)
        document.querySelector('body').style.overflowY = 'scroll';
    }

    return(
        <div className="image-frame">
            <button className="close" onClick={closeFrame}>X</button>
            <div className="image-box">
                <img className="image-large" src={urlImageLarge} alt="full-size" />

            </div>

        </div>
    )
}


export default ImageFrame;