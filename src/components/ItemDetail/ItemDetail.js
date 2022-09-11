import { useState,useEffect } from "react";
import getFetch from "../../helper/helper";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { useParams, Link } from "react-router-dom";

const ItemDetail = ({})=>{
    const [data,setData] = useState({})
    const [load, setLoad] = useState(true)
    const [add, setAdd] = useState (false)
    const {idProducto} = useParams()

    useEffect(()=>{
        getFetch
        .then(response =>{
            setData(response.find(data => data.id===parseInt(idProducto)))
            setLoad(false)
            
        })
    }, [idProducto])

    const [numeroProductos, setNumeroProductos] = useState(0);
    const agregar = (productos)=>{
        alert('Agregaste ' + productos + ' productos al carrito')//luego lo cambio por un toastify
        setNumeroProductos(productos);
        setAdd(true)
        console.log(agregar)
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
                    {
                        add ? <Link className="botonVolver" to={"/cart"}>Ir al carrito</Link>
                        :
                        <ItemCount texto={"Cantidad de productos: "} stock={6} initial={1} agregarProducto={agregar}/>
                    }
                    

                    <Link className="botonVolver" to={"/"}>
                        Volver
                    </Link>
                </div>
            }
        </>
    )
}

export default ItemDetail;