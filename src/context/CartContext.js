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

    const addProduct = (product, qty)=> {
        const inCartObj = isInCart(product.id)
        if (inCartObj.exists){
            const productListCopy = [...productCartList]
            productListCopy[inCartObj.index].quantity = productListCopy[inCartObj.index].quantity + qty
            productListCopy[inCartObj.index].totalPrice = productListCopy[inCartObj.index].quantity*productListCopy[inCartObj.index].price 
            setProductCartList(productListCopy)
        } else{
            const newProduct = {...product, quantity:qty, totalPrice: qty*product.price}
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

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.quantity, 0) 
        return totalProducts
    }

    const getFullPrice = ()=>{
        const fullPrice = productCartList.reduce((acu,item)=>acu + item.totalPrice, 0)
        return fullPrice
    }

    return (
        <CartContext.Provider value={{productCartList, addProduct, removeProduct, clearCart, isInCart, getTotalProducts, getFullPrice}}>
            {children}
        </CartContext.Provider>
    )
}