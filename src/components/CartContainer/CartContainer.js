import React from 'react'
import "./CartContainer.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartIndividual } from '../CartIndividual/CartIndividual'
import {Link} from "react-router-dom"

export const CartContainer = () => {
    const {productCartList, clearCart, getFullPrice} = useContext(CartContext)

    return (
            <div>
                {
                    productCartList.length>0 ?
                    <div className='cartContainer'>
                        <div>
                            {
                                productCartList.map(data=>(
                                    <CartIndividual key={data.id} data={data}/>
                                    ))
                            }
                        </div>
                        <strong>Precio total de los productos: ${getFullPrice()}</strong>
                        <button className="botonCart" onClick={clearCart}>Borrar todo</button>
                        <Link to={"/checkout"} className="botonCart">Comprar</Link>
                        <div className='divBoton'>
                            <Link className="botonCart" to={"/"}>
                            Seguir Comprando
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='noContainer'>
                        <h1>no hay productos</h1>
                        <Link className="botonCart" to={"/"}>
                            Volver
                        </Link>
                    </div>
                }
            </div>
    )
}
