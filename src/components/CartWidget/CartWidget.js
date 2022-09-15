import cartIcon from './/cartIcon.png'
import {Link} from 'react-router-dom'
import {CartContext} from "../../context/CartContext"
import { useContext } from 'react'
import "./CartWidget.css"

function CartWidget(){
    const {getTotalProducts,productCartList} = useContext(CartContext)
    return (
        <div>
            { productCartList.length>0 &&
                <>
                    <Link to={"/cart"}>
                        <img src={cartIcon} alt="" className='carritoIcon' width={"35px"}/>
                    </Link>
                    <span>{getTotalProducts()}</span>
                </>
            }
        </div>
    )
}

export default CartWidget;