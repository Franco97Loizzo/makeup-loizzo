import "./NavBar.css"
import logo1 from ".//logo1.png"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navStyle">
            <Link to={"/"}>
            <img className="logoLinda" width={"200px"} height="70px" src={logo1} alt=""/>
            </Link>

            <ul className="ulNav">
                <Link to="/" className="liNav">Inicio</Link>
                <Link to="/productos/sombra" className="liNav">Sombras</Link>
                <Link to="/productos/labio" className="liNav">Pinta Labios</Link>
                <Link to="/productos/rimel" className="liNav">Rimels</Link>
                <Link to="/productos/unas" className="liNav">Pinta Uñas</Link>
            </ul>
            <div className="botonesNav">
                <button id="login" className="botonNav">Login</button>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default NavBar;