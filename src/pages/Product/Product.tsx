import { useContext, useState } from "react"
import { ProductInfo } from "./ProductInfo"
import { ProductContext } from "../Home"
 
type ProductProps = {
    decrementByOne: React.MouseEventHandler<HTMLButtonElement>,
    increment: React.MouseEventHandler<HTMLButtonElement>
}

export function Product({decrementByOne, increment}: ProductProps) {

    const productQty = useContext(ProductContext)

    return (
        <>
            <h2>Single Product Component {productQty} <button onClick={decrementByOne}>-</button> </h2>
            <ProductInfo decrement={decrementByOne} increment={increment} />
        </>
    )
}