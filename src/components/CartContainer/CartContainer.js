import React from 'react'
import "./CartContainer.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'



export const CartContainer = () => {
    const {productCartList, removeProduct, clearCart} = useContext(CartContext)
    console.log("lista", productCartList)
    return (
        <div className='cartContainer'>
            
            <h1>Hola soy un carrito</h1>
            {
                productCartList.map(data=>(
                    <>
                    <div>
                        <p>{data.name}</p>
                        <p>${data.price}</p>
                        <p>.{data.quantity}</p>
                        <button onClick={()=>removeProduct(data.id)}>Eliminar Producto</button>
                    </div>
                    </>
                ))
            }
            <button onClick={()=>clearCart()}>Borrar todo</button>
        </div>

    )
}
