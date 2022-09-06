import React from "react";
import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({data})=>{
    return(
        <>
            <div className="itemStyle" key={data.name}>
                <img className="itemImg" src={data.img} alt="" width="200px" height="200px"/>
                <h2 className="tituloItem">{data.name}</h2>
                <strong className="precioitems">${data.price}</strong>
                <Link to={`/item/${data.id}`}>
                    <button className="botonDetalles">Ver Detalle</button>
                </Link>
            </div>
            
        </>
    )
}

export default Item