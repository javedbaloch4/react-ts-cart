import { useContext, useState } from "react"
import { Product } from "./Product"
import { ProductContext } from "../Home"

type ProductsType = {
    handleDec: React.MouseEventHandler<HTMLButtonElement>,
    handleInc: React.MouseEventHandler<HTMLButtonElement>
}

export function Products({handleDec, handleInc}: ProductsType) {

    const productQty = useContext(ProductContext)

    return (
        <>
            <h1>Products Component {productQty} <button onClick={handleDec}>-</button> <button onClick={handleInc}>+</button></h1>
            <Product decrementByOne={handleDec} increment={handleInc} /> 
        </>
    )
}