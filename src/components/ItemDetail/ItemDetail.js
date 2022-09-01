import { useState,useEffect } from "react";
import getFetch from "../../helper/helper";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({})=>{
    const [data,setData] = useState({})
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        getFetch
        .then(response =>{
            setData(response.find(prod => prod.id===7))
            setLoad(false)
        })
    }, [])

    const [numeroProductos, setNumeroProductos] = useState(0);

    const agregar = (productos)=>{
        alert('Agregaste ' + productos + ' productos al carrito')//luego lo cambio por un toastify
        setNumeroProductos(productos);
    }

    return(
        <>
            {
                load ? <h4>Espere unos segundos</h4>
                :
                <div className="detailContainer">
                    <h1 className="detalles">Detalles</h1>
                    <img className="detallesImg" src={data.img} alt="" width="450px"/>
                    <h2 className="titulodetalles">{data.name}</h2>
                    <h3>Descripcion</h3>
                    <p className="descriptiondetalles">{data.description}</p>
                    <p className="preciodetalles">${data.price}</p>
                    <ItemCount texto={"Cantidad de productos: "} stock={6} initial={1} agregarProducto={agregar}/>
                </div>
            }
            
        </>
    )


}

export default ItemDetail;