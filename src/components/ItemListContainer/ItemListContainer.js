


function ItemListContainer(props){
    const {titulo,texto} = props
    return(
        <>
        <h1>{titulo}</h1>
        <p>{texto}</p>
        </>
        
    )
}

export default ItemListContainer;