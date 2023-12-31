import { HeartIcon, CartLgIcon, OrderIcon, ProfileIcon, SearchIcon, useNavigatePage } from "@fit-grocer/utils";

export const Header = () => {
    const { navigateToCart, navigateToWishlist } = useNavigatePage();

    return (
        <div className="mx-4 mt-16 sm:mx-10 lg:mx-16 lg:mt-14 xl:mx-32 xl:mt-24 2xl:mx-60">
            <div className="flex items-start justify-between">
                <div className="pb-1 font-poppins text-2xl font-semibold">
                    <span className="pe-2">Hey Danyal</span>
                    <span role="img" aria-label="wave-emoji">
                        👋
                    </span>
                    <p className="font-poppins text-sm font-normal lg:text-base">It’s dinner time!</p>
                </div>
                <div className="hidden gap-4 lg:inline-flex">
                    <SearchIcon className="cursor-pointer" hanging="1.75rem" width="1.75rem" strokeWidth={2.5} />
                    <CartLgIcon
                        onClick={navigateToCart}
                        className="cursor-pointer"
                        hanging="2rem"
                        width="2rem"
                        strokeWidth={2.5}
                    />
                    <HeartIcon
                        onClick={navigateToWishlist}
                        className="cursor-pointer"
                        hanging="1.75rem"
                        width="1.75rem"
                        strokeWidth={2.5}
                        fill="none"
                        stroke="black"
                    />
                    <OrderIcon className="cursor-pointer" hanging="1.75rem" width="1.75rem" strokeWidth={5} />
                    <ProfileIcon className="cursor-pointer" hanging="2rem" width="2rem" strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
};
