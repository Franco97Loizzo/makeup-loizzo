import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import "./CartIndividual.css"

export const CartIndividual = ({data}) => {
    const {removeProduct} = useContext(CartContext)
    return (
        <div>
            <div className='bigContainer'>
                <div className='container'>
                    <img className='cartImg' src={data.img} alt="" width="150px"/>
                    <div className='listContainer'>
                        <p className='cartE'>Producto: 
                            <strong> {data.name}</strong>
                        </p>
                        <p className='cartE'>Precio idividual: <strong>${data.price}</strong></p>
                        <p className='cartE'>Cantidad: <strong>{data.quantity}</strong></p>
                        <p className='cartE'>Precio total: <strong>${data.totalPrice}</strong></p>
                    </div>
                </div>
                <button className='cartButton' onClick={()=>removeProduct(data.id)}>Eliminar Producto</button>
            </div>
            <hr className='hrline'/>
        </div>
        
    )
}
