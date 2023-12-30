import { useState } from "react";

export const useToggleFavourite = () => {
    const [favourites, setFavourites] = useState<{ [productId: number]: boolean }>({});

    function toggleFavourite(productId: number) {
        setFavourites((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    }

    return { favourites, toggleFavourite };
};
