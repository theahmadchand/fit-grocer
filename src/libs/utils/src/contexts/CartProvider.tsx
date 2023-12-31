import { createContext, useContext, useState } from "react";
import type { Product } from "./type";

export type CartContextProps = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: FCC = (props) => {
    const { children } = props;
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export const useCartContext = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");

    return context;
};
