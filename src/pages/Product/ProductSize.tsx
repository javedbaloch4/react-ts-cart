import { useContext, useState } from "react"
import { ProductVariations } from "./ProductVariations"
import { ProductContext } from "../Home"

type ProductSizeProps = {
    decByOne: React.MouseEventHandler<HTMLButtonElement>,
    incrementByOne: React.MouseEventHandler<HTMLButtonElement>
}

export function ProductSize({decByOne, incrementByOne}: ProductSizeProps) {
    
    const productQty = useContext(ProductContext)

    return (
        <>
            <h4>Product Size {productQty} <button onClick={decByOne}>-</button></h4>
            <ProductVariations handleDecrement={decByOne} increment={incrementByOne} />
        </>
    )
}