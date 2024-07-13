import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import './products.css'

export function Products ({ products }) {
    const { addToCart, cart, removeFromCart } = useCart()
    const checckProductInCart = (products) => {
        return cart.some(item => item.id === products.id)
    }

    return(
        <main className="products">
            <ul>
                {products.map(products => {
                    const isProductInCart = checckProductInCart(products)
                return(
                    <li key={products.id}>
                        <img src={`${products.images[0]}`} alt={products.title} />
                        <div>
                            <strong>{products.title}</strong> - ${products.price} 
                        </div>
                        <div>
                            <button style={{background: isProductInCart ? 'red' : '#09f'}} onClick={isProductInCart ? () => removeFromCart(products) : () => addToCart(products)}>
                                {
                                    isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                }
                            </button>
                        </div>
                    </li>
                )})}
            </ul>
        </main>
    )
}