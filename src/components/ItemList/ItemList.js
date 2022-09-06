import { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Item from "../Item/Item";
import "./ItemList.css"
import {useParams} from "react-router-dom"

const ItemList = ()=>{
    const [data, setData] = useState([])
    const {tipoProducto} = useParams()

    useEffect(()=>{
        getFetch.then(data =>{
            if(!tipoProducto){
                setData(data)
            } else{
                const nuevaLista = data.filter(item=>item.categoria === tipoProducto)
                setData(nuevaLista)
            }
        })
    }, [tipoProducto])

    return(
        <>
            <div className="itemListStyle">
                {
                    data.map(
                        data=>(
                            <Item key={data.name} data={data}/>
                        )
                    )
                }
            </div>
        </>
    )
}

export default ItemList;