import { createContext, useState } from "react"
import { Products } from "./Product/Products"

export const ProductContext = createContext({})

export function Home() {
    const [productQty, setProduct] = useState(0)

    function handleInc() {
        setProduct(productQty+1)
    }

    function handleDec() {
        setProduct(productQty-1)
    }

    return (
        <>
            <ProductContext.Provider value={productQty}>
                <h1>Hello</h1>
                <hr />
                <strong>Product: </strong> {productQty}

                <Products handleDec={handleDec} handleInc={handleInc} />

                <button onClick={handleInc}>+</button>
            </ProductContext.Provider>
        </>
    )
}