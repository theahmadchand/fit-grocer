import { HeartIcon, LeftArrowIcon, useWishlistContext } from "@fit-grocer/utils";
import { Product } from "./types";

type NavigationAndFavoriteBarProps = {
    product: Product;
    navigateButtonCallback: () => void;
};

export const NavigationAndFavoriteBar = (props: NavigationAndFavoriteBarProps) => {
    const { product, navigateButtonCallback } = props;

    const { isProductInWishlist, toggleWishlist } = useWishlistContext();

    const toggleFavourite = () => toggleWishlist(product);

    return (
        <div className="3xl:py-18 py-10 2xl:py-14">
            <div className="flex items-center justify-between">
                <LeftArrowIcon
                    className="cursor-pointer"
                    onClick={navigateButtonCallback}
                    width="2.5rem"
                    height="2.5rem"
                />
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
        </div>
    );
};
