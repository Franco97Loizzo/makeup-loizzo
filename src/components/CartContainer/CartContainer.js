import React from 'react'
import "./CartContainer.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartIndividual } from '../CartIndividual/CartIndividual'



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
                    </>
                    :
                    <h1>no hay productos</h1>
                }
            </div>
        </div>
    )
}
