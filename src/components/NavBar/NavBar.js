import "./NavBar.css"
import logo1 from ".//logo1.png"
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="navStyle">
            <Link to={"/"}>
                <img className="logoLinda" width={"200px"} height="70px" src={logo1} alt=""/>
            </Link>
            <ul className="ulNav">
                <NavLink className={({isActive})=>isActive ? "liNav" : "inactiveNav"} to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "liNav" : "inactiveNav"} to="/productos/sombra">Sombras</NavLink>
                <NavLink className={({isActive})=>isActive ? "liNav" : "inactiveNav"} to="/productos/labio">Pinta Labios</NavLink>
                <NavLink className={({isActive})=>isActive ? "liNav" : "inactiveNav"} to="/productos/rimel">Rimels</NavLink>
                <NavLink className={({isActive})=>isActive ? "liNav" : "inactiveNav"} to="/productos/unas">Pinta Uñas</NavLink>
            </ul>
            <div className="botonesNav">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;