import "./NavBar.css"
import logo1 from ".//logo1.png"
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return(
        <nav className="navStyle">
            <img className="logoLinda" width={"200px"} height="70px" src={logo1} alt=""/>
            <ul className="ulNav">
                <li className="liNav">Inicio</li>
                <li className="liNav">Todos los productos</li>
                <li className="liNav">Pinta labios</li>
                <li className="liNav">Rimels</li>
            </ul>
            <div className="botonesNav">
                <button id="login" className="botonNav">Login</button>
                <CartWidget/>
            </div>
            
        </nav>
    )
}

export default NavBar;