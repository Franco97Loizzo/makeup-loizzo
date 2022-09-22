import { addDoc, collection } from 'firebase/firestore'
import {React , useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import {datab} from "../../utils/firebase"

export const Form = () => {
    const {productCartList, getFullPrice} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")
    const [orderTicket, setOrderTicket] = useState(false)

    const timestamp = Date.now()
    const dateString = timestamp
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const sendOrder = (eve)=>{
        eve.preventDefault()
        const order = {
            buyer: {
                name: eve.target[0].value,
                phone: eve.target[1].value,
                email: eve.target[2].value
            },
            items: productCartList,
            total: getFullPrice(),
            date: formatDate(dateString)
        }
        const queryRef = collection(datab, "orders")
        addDoc(queryRef, order)
            .then(res=>setIdOrder(res.id))
        console.log(order, idOrder)
        setOrderTicket(!orderTicket)
        
    }

    const openMsg = ()=>{
        setOrderTicket(!orderTicket)
    }

    const stopEvent= (e)=>{
        e.stopPropagation();
    }

    return (
        <>
        <form onSubmit={sendOrder}>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Telefono'/>
            <input type="text" placeholder='Email'/>
            <button type='submit'>Enviar Formulario</button>
        </form>
        {
            orderTicket &&
            <div className='background-modal' onClick={openMsg}>
                <div className='modal' onClick={stopEvent}>
                    <div className='divTopContainer'>
                        <strong className='textoModal'>Mensaje</strong>
                        <button className='botonModalX' onClick={openMsg}>X</button>
                    </div>
                    <hr/>
                        <p className='textoModal'>Felicidades!</p>
                        <p className='textoModal'>Su compra se realizo con exito!</p>
                        <p className='textoModal'>ID de transaccion: {idOrder}</p>
                        <p className='textoModal'>A la fecha {formatDate(dateString)}</p>
                        <button className='botonModal' onClick={openMsg}>cerrar</button>
                </div>
            </div>
        }
        </>
    )
}
