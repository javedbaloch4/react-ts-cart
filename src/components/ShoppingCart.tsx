import { Offcanvas, Button } from "react-bootstrap"
import { CartItem } from "./CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {

    const {closeCart, cartItems} = useShoppingCart()

    return( 
        <>
            <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total{" "}
                            {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                            }, 0)
                        )}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}