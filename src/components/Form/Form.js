import { addDoc, collection } from 'firebase/firestore'
import {React , useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext'
import {datab} from "../../utils/firebase"
import { Modal } from '../Modal/Modal'
import "./Form.css"

export const Form = () => {
    const {productCartList, getFullPrice, clearCart} = useContext(CartContext)
    const [idOrder, setIdOrder] = useState("")
    const [orderTicket, setOrderTicket] = useState(false)
    const [userForm, setUserForm] = useState({
        name:'',
        surname:'',
        phone:0,
        email:'',
        emailcheck:''
    })

    const timestamp = Date.now()
    const dateString = timestamp
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const sendOrder = (eve)=>{
        eve.preventDefault()
        const order = {
            items: productCartList,
            total: getFullPrice(),
            date: formatDate(dateString)
        }
        const queryRef = collection(datab, "orders")
        addDoc(queryRef, order)
            .then(res=>setIdOrder(res.id))
        setOrderTicket(!orderTicket)
    }

    const openMsg = ()=>{
        setOrderTicket(!orderTicket)
        clearCart()
    }

    const stopEvent= (e)=>{
        e.stopPropagation();
    }

    const onInput = (e)=>{
        setUserForm({...userForm, [e.target.name]: e.target.value})
    }
    const inputArray = [
        {title:"Nombre", inputName:"name", placeholder:"ej: Franco"},
        {title:"Apellido", inputName:"surname", placeholder:"ej: Loizzo"},
        {title:"Telefono", inputName:"phone", placeholder:"ej: +541234567899"},
        {title:"Email", inputName:"email", placeholder:"ejemplo@mail.cm"},
        {title:"Repita su Email", inputName:"emailcheck", placeholder:"ejemplo@mail.cm"}
    ]
    const indRegex = /\+\d{12}$/;
    return (
        <div className='formContainer'>
            <form onSubmit={sendOrder}>
                <strong>Llene este Formulario para realizar la compra</strong>
                {
                    inputArray.map(ele=>(
                        <div className='divForm'>
                            <label className='labels'>{ele.title}</label>
                            <input className='inputs'
                            type="text" 
                            name={ele.inputName}
                            placeholder={ele.placeholder}
                            onChange={(e)=> onInput(e)}
                            size={20}/>
                        </div>
                    ))
                }
                <button
                disabled={
                    !(
                        userForm.name &&
                        userForm.surname &&
                        userForm.email &&
                        userForm.email === userForm.emailcheck &&
                        userForm.phone.match(indRegex) 
                    )
                }
                className="botonSubmit"
                type='submit'>Enviar Formulario</button>
            </form>
            {
                orderTicket &&
                <Modal 
                text1={`Felicidades ${userForm.name}!`}
                text2={"Su compra se realizo con exito!"}
                text3={`A la fecha ${formatDate(dateString)}`}
                text4={`ID de transaccion: ${idOrder}`}
                stopEvent={stopEvent}
                action={openMsg}
                />
            }
        </div>
    )
}
