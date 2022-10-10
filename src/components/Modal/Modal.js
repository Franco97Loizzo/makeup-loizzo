import React from 'react'
import "./Modal.css"

export const Modal = ({text1, text2, text3, text4, stopEvent, action}) => {

    return (
        <div className='background-modal' onClick={action}>
            <div className='modal' onClick={()=>stopEvent}>
                <div className='divTopContainer'>
                    <strong className='textoModal'>Mensaje</strong>
                    <button className='botonModalX' onClick={action}>X</button>
                </div>
                <hr/>
                <p className='textoModal'>{text1}</p>
                <p className='textoModal'>{text2}</p>
                <p className='textoModal'>{text3}</p>
                <p className='textoModal'>{text4}</p>
                <button className='botonModal' onClick={action}>cerrar</button>
            </div>
        </div>
    )
}
