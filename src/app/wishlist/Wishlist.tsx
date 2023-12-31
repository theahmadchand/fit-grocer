import { PageLayout, WishItem } from "@fit-grocer/components";
import { useNavigatePage, useWishlistContext } from "@fit-grocer/utils";

export const Wishlist = () => {
    const { navigateToHome } = useNavigatePage();
    const { wishlist, toggleWishlist, isProductInWishlist } = useWishlistContext();

    return (
        <PageLayout pageTitle="My Wishlist" navigateButtonCallback={navigateToHome}>
            <div className="mt-10">
                {wishlist.map((wishItem) => (
                    <div key={wishItem.id}>
                        <WishItem
                            product={wishItem}
                            isProductInWishlist={isProductInWishlist}
                            toggleWishlist={toggleWishlist}
                        />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};
