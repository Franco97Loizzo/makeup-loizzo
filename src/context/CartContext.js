import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [productCartList, setProductCartList] = useState([])

    const isInCart = (id)=>{
        const elementExists = productCartList.some((elemento)=>elemento.id === id)
        return elementExists;
    }

    const addProduct = (product, qty)=>{
        const newList = [...productCartList]

        if(isInCart(product.id)){
            const productIndex = productCartList.findIndex(element => element.id === product.id)
            newList[productIndex].quantity = newList[productIndex].quantity + qty;
            setProductCartList(newList)
        } else{
            const newProduct = {...product, quantity:qty}
            const newList = [...productCartList]
            newList.push(newProduct)
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