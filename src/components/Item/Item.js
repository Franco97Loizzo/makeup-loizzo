import React from "react";
import "./Item.css"

const Item = ({data})=>{
    return(
        <>
            <div className="itemStyle" key={data.name}>
                <img className="itemImg" src={data.img} alt="" width="200px" height="200px"/>
                <h2 className="tituloItem">{data.name}</h2>
                <strong className="precioitems">${data.price}</strong>
                <button className="botonDetalles">Ver Detalle</button>
            </div>
            
        </>
    )
}

export default Item