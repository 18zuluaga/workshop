import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";
import './Cart.css'
import { Products } from "./products";

function CartItem ({ title, price, quantity, id, addToCart }) {

    return (
        <li key={id}>
            <img src="" alt={title} />
            <div>
                <strong>{title}</strong> - ${price} 
            </div>
            <footer>
                <small> 
                Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const { cart, addToCart, clearCart  } = useCart()
    const cartCheckboxId = useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" id={cartCheckboxId} className="cart-checkbox" hidden />

            <aside className="cart">
                <ul>
                    {cart.map(item => (
                        <CartItem 
                            key={item.id}
                            {...item}
                            addToCart={() => addToCart(item)}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}><ClearCartIcon/></button>
            </aside>
        </>
    )
}