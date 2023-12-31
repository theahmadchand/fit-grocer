import { useNavigate } from "react-router-dom";

export const useNavigatePage = () => {
    const navigate = useNavigate();

    function navigateToCart() {
        navigate("/cart");
    }

    function navigateToWishlist() {
        navigate("/wishlist");
    }

    function navigateToCheckout() {
        navigate("/checkout");
    }

    function navigateToOrderPlaced() {
        navigate("/order-placed");
    }

    function navigateToHome() {
        navigate("/");
    }

    return {
        navigateToCart,
        navigateToWishlist,
        navigateToCheckout,
        navigateToOrderPlaced,
        navigateToHome,
    };
};
