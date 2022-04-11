
const Search = (props) =>{

    const changeImgValue = e => {
        props.onValueChange(e.target.value);
    }


    const searchImage = (e) => {
        e.preventDefault();
        props.onSearchImages(props.imageValue)
    }

    return(
        <form className="Search-form">
            <input 
                typeof="text"
                placeholder="Buscar imagen..."
                className="Search-input"
                id="Search-input"
                value={props.imageValue}
                onChange={changeImgValue}
            />

            <button typeof="button" id="Search-button" className="Search-button" onClick={searchImage}>Buscar</button>
        </form>
    )
}

export default Search;