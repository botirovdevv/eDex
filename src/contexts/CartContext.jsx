import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const itemExists = cart.some(cartItem => cartItem.id === item.id);
        if (itemExists) {
            alert('Bu mahsulot savatchada allaqachon mavjud.');
        } else if (cart.length >= 4) {
            alert('Savatchada faqat 4ta mahsulot bo\'lishi mumkin.');
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(
            cart.filter((item) => item.id !== itemId)
        )
    }

    const clearAll = () => {
        setCart([])
    }
    

    return(
        <CartContext.Provider value={{addToCart, removeFromCart, cart, clearAll}}>
            {children}
        </CartContext.Provider>
    )
}