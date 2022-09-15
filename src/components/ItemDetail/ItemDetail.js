import { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({data})=>{
    const {addProduct} = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    const onAdd = (count)=>{
        alert('Agregaste ' + count + ' productos al carrito')//luego lo cambio por un toastify
        setQuantity(count)
        addProduct(data,count)
    }

    return(
                <div className="detailContainer">
                    <h1 className="detalles">Detalles</h1>
                    <img className="detallesImg" src={data.img} alt="" width="450px"/>
                    <h2 className="titulodetalles">{data.name}</h2>
                    <h3>Descripcion</h3>
                    <p className="descriptiondetalles">{data.description}</p>
                    <p className="preciodetalles">${data.price}</p>
                    {
                        quantity<6 ?
                        <ItemCount texto={"Cantidad de productos: "} stock={6} initial={1} onAdd={onAdd}/>
                        : <h3>No hay mas stock :c</h3>
                    }
                    
                    {
                        quantity>0 && <Link className="botonVolver" to={"/cart"}>Ir al carrito</Link>
                    }
                    <Link className="botonVolver" to={"/"}>
                        Volver
                    </Link>
                </div>
    )
}

export default ItemDetail;