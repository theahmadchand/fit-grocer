import { useNavigate } from "react-router-dom";

export const useNavigatePage = () => {
    const navigate = useNavigate();

    function navigateToPreviousPage() {
        navigate("..");
    }

    function navigateToCart() {
        navigate("/cart");
    }

    function navigateToWishlist() {
        navigate("/wishlist");
    }

    return { navigateToPreviousPage, navigateToCart, navigateToWishlist };
};
