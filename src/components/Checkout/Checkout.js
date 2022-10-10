import React from 'react'
import { Form } from '../Form/Form'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./Checkout.css"

export const Checkout = () => {
    const {productCartList} = useContext(CartContext)

    return (
        <div className='checkContainer'>
            {
                productCartList.length>0 ?
                <Form/>
                : <Link className='botonVolver' to={"/"}>Volver</Link>
            }
        </div>
    )
}