import { useState } from "react"
import "./ItemCount.css"



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
        <>
            <section className="countContainer">
                <div className="counterContainer">
                    <button className="botonCounter" onClick={decreBoton}>-</button>
                    <strong className="countText">{texto}{contador}</strong>
                    <button className="botonCounter" onClick={increBoton}>+</button>
                </div>
                <button disabled={stock === 0} className="botonAgregar" onClick={()=>(agregarProducto(contador))}>Agregar al Carrito</button>
            </section>

        </>
    )
}


