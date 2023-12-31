import { WishItem } from "@fit-grocer/components";
import { LeftArrowIcon, useNavigatePage, useWishlistContext } from "@fit-grocer/utils";

export const Wishlist = () => {
    const { navigateToPreviousPage } = useNavigatePage();
    const { wishlist, toggleWishlist, isProductInWishlist } = useWishlistContext();

    return (
        <div className="px-6 pt-10 sm:px-10 lg:px-16 xl:px-32 2xl:px-60 2xl:pt-16 3xl:pt-24">
            <div className="flex items-center justify-between">
                <LeftArrowIcon
                    className="cursor-pointer"
                    onClick={navigateToPreviousPage}
                    width="2.5rem"
                    height="2.5rem"
                />
                <span className="w-2/3 font-poppins text-2xl font-semibold">My WishList</span>
            </div>
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
        </div>
    );
};
