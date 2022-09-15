import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

export const CartIndividual = ({data}) => {
    const {removeProduct} = useContext(CartContext)
    return (
        <div>
            <img src={data.img} alt="" width="70px"/>
            <p>{data.name}</p>
            <p>${data.price}</p>
            <p>Cantidad: {data.quantity}</p>
            <p>Precio total: {data.totalPrice}</p>
            <button onClick={()=>removeProduct(data.id)}>Eliminar Producto</button>
    </div>
    )
}
