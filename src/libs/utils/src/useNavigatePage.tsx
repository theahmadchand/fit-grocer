import { useNavigate } from "react-router-dom";

export const useNavigatePage = () => {
    const navigate = useNavigate();

    function navigateToPreviousPage() {
        navigate(-1);
    }

    function navigateToCart() {
        navigate("/cart");
    }

    function navigateToWishlist() {
        navigate("/wishlist");
    }

    function navigateToCheckout() {
        navigate("/checkout");
    }

    return { navigateToPreviousPage, navigateToCart, navigateToWishlist, navigateToCheckout };
};
