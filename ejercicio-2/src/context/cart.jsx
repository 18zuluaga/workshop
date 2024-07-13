import { createContext, useReducer} from "react";

export const cartContext = createContext()

const initialState = []
const reducer = (state, action) => {
    const { type: actionType, payload: actionPlayload } = action
    switch (action.type) {
        case 'ADD_TO_CART': {
            const { id } = actionPlayload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                return newState
            }

            return [...state, { ...actionPlayload, quantity: 1 }]
        }

        case 'REMOVE_FROM_CART': {
            const { id } = actionPlayload
            return state.filter(item => item.id !== id)
        }    

        case 'CLEAR_CART': {
            return initialState
        }
    }
    return state
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return (
        <cartContext.Provider value={{ cart: state, addToCart, clearCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}