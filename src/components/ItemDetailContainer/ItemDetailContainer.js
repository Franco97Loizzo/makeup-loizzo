import {React, useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore"
import {datab} from "../../utils/firebase"

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    const {idProduct} = useParams()
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        const queryRef = doc(datab, "items", idProduct)
        getDoc(queryRef)
        .then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            setData(newDoc)
            setLoad(false)
        }).catch(error=>console.log(error))
    }, [idProduct])

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

