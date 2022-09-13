import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([])
    
    const isInCart = (id)=> {
        const elmIdenx = productCartList.findIndex(product => product.id === id);
        if(elmIdenx>=0){
            return {exists: true, index:elmIdenx}
        } else {
            return {exists: false, index:undefined}
        }
    }

    const addProduct = (product)=> {
        const inCartObj = isInCart(product.id)
        if (inCartObj.exists){
            const productListCopy = [...productCartList]
            productListCopy[inCartObj.index].quantity = productListCopy[inCartObj.index].quantity + product.quantity
            setProductCartList(productListCopy)
        } else{
            const newList = [...productCartList, product]
            setProductCartList(newList)
        }
    }

    const removeProduct = (idProduct) => {
        const copyArry = [...productCartList]
        const newArray = copyArry.filter(elm=>elm.id !== idProduct)
        setProductCartList(newArray)
    }

    const clearCart = ()=>{
        setProductCartList([])
    }


    return (
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}