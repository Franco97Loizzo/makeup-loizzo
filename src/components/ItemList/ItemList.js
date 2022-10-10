import { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./ItemList.css"
import {useParams} from "react-router-dom"
import {collection, getDocs, query, where} from "firebase/firestore"
import {datab} from "../../utils/firebase"


const ItemList = ()=>{
    const [data, setData] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{
        const getData = async()=>{
            try {
                let queryRef = !categoria
                ? collection(datab, "items")
                : query(collection(datab,"items"), where("categoria","==",categoria))
                const response = await getDocs(queryRef)
                const datas = response.docs.map(doc=>{
                    const newDoc = {
                        ...doc.data(),
                        id:doc.id
                    }
                    return newDoc;
                });
                setData(datas)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    },[categoria])

    return(
        <div className="itemListStyle">
            {
                data.map(
                    data=>(
                        <Item key={data.name} data={data}/>
                    )
                )
            }
        </div>
    )
}

export default ItemList;