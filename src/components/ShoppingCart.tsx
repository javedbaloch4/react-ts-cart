import { Offcanvas, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart} = useShoppingCart()

    return( 
        <>
            <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}