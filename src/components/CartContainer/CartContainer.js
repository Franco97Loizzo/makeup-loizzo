import React from 'react'
import "./CartContainer.css"
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartIndividual } from '../CartIndividual/CartIndividual'
import {Link} from "react-router-dom"
import { Form } from '../Form/Form'



export const CartContainer = () => {
    const {productCartList, clearCart, getFullPrice} = useContext(CartContext)
    const [onBuy, setOnBuy] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const funcBuy = ()=>{
        setOpenModal(!openModal)
        setOnBuy(true)
    }
    const stopEvent= (e)=>{
        e.stopPropagation();
    }
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
                        <button onClick={()=>funcBuy()}>Comprar</button>
                        {
                            openModal ? 
                            <div className='background-modal' onClick={funcBuy}>
                                <div className='modal' onClick={stopEvent}>
                                    <div className='divTopContainer'>
                                        <strong className='textoModal'>Mensaje</strong>
                                        <button className='botonModalX' onClick={funcBuy}>X</button>
                                    </div>
                                    
                                    <hr/>
                                    <p className='textoModal'>Antes de realizar la compra
                                        debes llenar el siguiente formulario</p>
                                    <button className='botonModal' onClick={funcBuy}>cerrar</button>
                                </div>
                            </div>
                        :
                        null
                        }
                        {
                            onBuy ? 
                            <>
                                <Form/>
                                <div className='divBoton'>
                                    <Link className="botonSeguirComprando" to={"/"}>
                                        Seguir Comprando
                                    </Link>
                                </div>
                            </>
                            :
                            <div className='divBoton'>
                                <Link className="botonSeguirComprando" to={"/"}>
                                Seguir Comprando
                                </Link>
                            </div>
                        }
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
