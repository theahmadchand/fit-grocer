import { useState } from "react";

export const useQuantityCounter = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return { quantity, increaseQuantity, decreaseQuantity };
};
