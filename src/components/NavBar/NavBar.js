import "./NavBar.css"
import logo1 from ".//logo1.png"

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
            <button id="login" className="botonNav">Login</button>
        </nav>
    )
}

export default NavBar;