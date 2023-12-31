import { HeartIcon, LeftArrowIcon, useNavigatePage, useWishlistContext } from "@fit-grocer/utils";
import { Product } from "./types";

type NavigationAndFavoriteBarProps = {
    product: Product;
};

export const NavigationAndFavoriteBar = (props: NavigationAndFavoriteBarProps) => {
    const { product } = props;
    const { navigateToPreviousPage } = useNavigatePage();
    const { isProductInWishlist, toggleWishlist } = useWishlistContext();

    const toggleFavourite = () => toggleWishlist(product);

    return (
        <div className="flex items-center justify-between">
            <LeftArrowIcon className="cursor-pointer" onClick={navigateToPreviousPage} width="2.5rem" height="2.5rem" />
            <HeartIcon
                className="cursor-pointer"
                onClick={toggleFavourite}
                width="2rem"
                height="2rem"
                strokeWidth="1.5"
                fill={isProductInWishlist(product.id) ? "var(--color-orange)" : "none"}
                stroke={isProductInWishlist(product.id) ? "var(--color-orange)" : "black"}
            />
        </div>
    );
};
