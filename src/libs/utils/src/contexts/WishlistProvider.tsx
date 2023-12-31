import { createContext, useContext, useState } from "react";
import type { Product } from "./type";

export type WishlistContextProps = {
    wishlist: Product[];
    toggleWishlist: (product: Product) => void;
    isProductInWishlist: (productId: number) => boolean;
};

const WishlistContext = createContext<WishlistContextProps>({} as WishlistContextProps);

export const WishlistProvider: FCC = (props) => {
    const { children } = props;
    const [wishlist, setWishlist] = useState<Product[]>([]);

    const addToWishlist = (product: Product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };

    const removeFromWishlist = (productId: number) => {
        setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
    };

    const isProductInWishlist = (productId: number) => {
        return wishlist.some((product) => product.id === productId);
    };

    const toggleWishlist = (product: Product) => {
        if (isProductInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlist, toggleWishlist, isProductInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlistContext = (): WishlistContextProps => {
    const context = useContext(WishlistContext);
    if (!context) throw new Error("useWishlist must be used within a WishlistProvider");

    return context;
};
