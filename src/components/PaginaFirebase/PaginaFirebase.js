import React, { useEffect } from 'react'
import { collection, doc, getDocs } from "firebase/firestore"
import {datab} from "../../utils/firebase"
import {Item} from "../Item/Item"

export const PaginaFirebase = () => {

    useEffect(()=>{
        const getData = async ()=>{
            const query = collection(datab, "items")
            const response = await getDocs(query)
            const docs = response.docs;
            /* console.log("docs", docs) */
            const data = docs.map(doc=>{return {...doc.data(), id:doc.id} })
            console.log("data", data)
        }
        getData()
    },[])
    return (
        <>
            <h1>PaginaFirebase</h1>
            <div className="itemListStyle">
{/*                 {
                    data.map(
                        data=>(
                            <Item key={data.name} data={data}/>
                        )
                    )
                } */}
            </div>
        </>

    )
}
