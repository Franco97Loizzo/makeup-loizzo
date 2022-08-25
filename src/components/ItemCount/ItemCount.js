import { useState } from "react"



export const ItemCount = ({stock, initial, agregarProducto, texto})=>{
    const [contador, setContador] = useState(initial)
    const increBoton = ()=>{
        if(contador<stock){
            setContador(contador + 1)
        }
    }
    const decreBoton = ()=>{
        if(contador>0){
            setContador(contador - 1)
        }
    }
    
    
    return(
        
        <div>
            <button onClick={decreBoton}>-</button>
            <p>{texto}{contador}</p>
            <button onClick={increBoton}>+</button>
            <button onClick={()=>(agregarProducto(contador))}>Agregar al Carrito</button>
        </div>
    )
}


