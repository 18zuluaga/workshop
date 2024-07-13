import { useContext } from "react"
import { cartContext } from "../context/cart.jsx"

export function useCart () {
    const cart = useContext(cartContext)

    if (!cart) {
        throw new Error("useCart must be used within a CartProvider")
    }

    return cart

}