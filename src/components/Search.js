import { useState } from "react"

const Search = (props) =>{

    const [imageValue, setImageValue] = useState("")

    const changeImgValue = e => setImageValue(e.target.value);

    const searchImage = (e) =>{
        e.preventDefault()
        props.onImagesChange(imageValue)
    }

    return(
        <form className="Search-form">
            <input 
                typeof="text"
                placeholder="Buscar imagen..."
                className="Search-input"
                id="Search-input"
                value={imageValue}
                onChange={changeImgValue}
            />

            <button typeof="button" id="Search-button" className="Search-button" onClick={searchImage}>Buscar</button>
        </form>
    )
}

export default Search;