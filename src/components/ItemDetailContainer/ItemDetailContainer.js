import {React, useState, useEffect} from "react";
import getFetch from "../../helper/helper";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    const {idProducto} = useParams()
    const [load, setLoad] = useState(true)
    useEffect(()=>{
        getFetch
        .then(response =>{
            setData(response.find(data => data.id===parseInt(idProducto)))
            setLoad(false)
        })
    }, [idProducto])

    return(
        <>
            {
                load ? <h3>Espere unos seg</h3>
                :
                <ItemDetail data={data}/>
            }
            
        </>
        
    )
}

export default ItemDetailContainer

