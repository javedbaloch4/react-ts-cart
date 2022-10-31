import { useContext, useState } from "react"
import { ProductSize } from "./ProductSize"
import { ProductContext } from "../Home"

type ProductInfoTypes = {
    decrement: React.MouseEventHandler<HTMLButtonElement>,
    increment: React.MouseEventHandler<HTMLButtonElement>
}

export function ProductInfo({decrement, increment} : ProductInfoTypes) {

    const product = useContext(ProductContext)

    return (
        <>
            <h3>Product Info ComponentD {product} <button onClick={decrement}>-</button></h3>
            <ProductSize decByOne={decrement} incrementByOne={increment} />
        </>
    )
}