import { useState } from "react"
import "./ItemCount.css"



export const ItemCount = ({stock, initial, onAdd, texto})=>{
    const [count, setCount] = useState(initial)
    const increBoton = ()=>{
        if(count<stock){
            setCount(count + 1)
        }
    }
    const decreBoton = ()=>{
        if(count>0){
            setCount(count - 1)
        }
    }
    
    
    return(
        <>
            <section className="countContainer">
                <div className="counterContainer">
                    <button className="botonCounter" onClick={decreBoton}>-</button>
                    <strong className="countText">{texto}{count}</strong>
                    <button className="botonCounter" onClick={increBoton}>+</button>
                </div>
                <button disabled={stock === 0} className="botonAgregar" onClick={()=>(onAdd(count))}>Agregar al Carrito</button>
            </section>

        </>
    )
}


