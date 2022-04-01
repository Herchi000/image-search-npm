import logo from '../logo.svg';


const Header = () => {


    return(
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <h1 className='Header-h1'>Buscador de Imágenes</h1>
        </header>
    )
}

export default Header;