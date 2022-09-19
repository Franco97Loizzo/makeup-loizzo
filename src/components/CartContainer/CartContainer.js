import React from 'react'
import "./CartContainer.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartIndividual } from '../CartIndividual/CartIndividual'
import {Link} from "react-router-dom"



export const CartContainer = () => {
    const {productCartList, clearCart, getFullPrice} = useContext(CartContext)

    return (
        <div className='cartContainer'>
            <div>
                {
                    productCartList.length>0 ?
                    <>
                        {
                            productCartList.map(data=>(
                                <CartIndividual key={data.id} data={data}/>
                                ))
                                
                        }
                        <p>Precio total de los productos: {getFullPrice()}</p>
                        <button onClick={clearCart}>Borrar todo</button>
                        <Link className="botonVolver" to={"/"}>
                        Seguir Comprando
                        </Link>
                    </>
                    :
                    <div>
                    <h1>no hay productos</h1>
                    <Link className="botonVolver" to={"/"}>
                        Volver
                    </Link>
                    </div>

                }
            </div>
        </div>
    )
}
