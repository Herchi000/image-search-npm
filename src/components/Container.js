import { useState } from "react"
import Images from "./Images"
import Search from "./Search"
import { createClient } from "pexels"
import { apiKey } from "../api/config"



const Container = () => {
    const [imageValue, setImageValue] = useState()
    //const client = createClient(apiKey)
    const query = 'Nature';
    
    const handleImageValue = async (value) =>{
        setImageValue(value)

        // await client.photos.search({query, per_page:12})
        // .then(photos => console.log(photos))
    }

    return(
        <div id="container">
            <Search 
                onImagesChange={handleImageValue}
            />
            <Images />
        </div>
    )
}

export default Container