import { useEffect, useState } from "react"
import Images from "./Images"
import Search from "./Search"
import axios from "axios"
import { apiKey } from "../api/config"



const Container = () => {
    const [imageValue, setImageValue] = useState("")
    const [images, setImages] = useState([])
    

    const handleImageValue = async (value) =>{
        setImageValue(value)

    }
    
    const SearchImages = async (value) => {
        axios.defaults.headers.common['Authorization'] = apiKey;
        await axios(`https://api.pexels.com/v1/search?query=${value}&per_page=18`)
        .then(arrayData => {
            console.log(arrayData)
            setImages(arrayData.data.photos)
        })
    }

    useEffect(() => {
        SearchImages('Nature');
    }, [])

    return(
        <div id="container">
            <Search 
                onValueChange={handleImageValue}
                onSearchImages={SearchImages}
                imageValue={imageValue}
            />
            
            <div className="images-container">
                {images.map((value, index) => {
                    return <Images key={index} urlImage={value.src.large}/>
                })}
            </div>
            
            
        </div>
    )
}

export default Container