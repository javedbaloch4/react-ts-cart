import { useContext, useState } from "react"
import { ProductContext } from "../Home"

type ProductVariationsTypes = {
    handleDecrement: React.MouseEventHandler<HTMLButtonElement>,
    increment: React.MouseEventHandler<HTMLButtonElement>
}


export function ProductVariations({handleDecrement, increment}: ProductVariationsTypes) {

    const productQty = useContext(ProductContext)

    return (
        <>
            <h5>Product Variations {productQty} <button onClick={handleDecrement}>-</button> <button onClick={increment}>+</button></h5>
        </>
    )
}