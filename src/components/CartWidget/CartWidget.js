import cartIcon from './/cartIcon.png'
import {Link} from 'react-router-dom'

function CartWidget(){
    return (
        <Link to={"/cart"}>
            <img src={cartIcon} alt="" className='carritoIcon' width={"35px"} />
        </Link>

    )
}

export default CartWidget;