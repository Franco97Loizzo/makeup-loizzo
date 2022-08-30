import { useEffect, useState } from "react";
import getFetch from "../../helper/helper";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ()=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        getFetch.then(data => {
            setData(data)
        })
    }, [])

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