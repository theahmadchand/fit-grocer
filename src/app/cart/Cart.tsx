import { CartItem } from "@fit-grocer/components";
import { LeftArrowIcon, useCartContext, useNavigatePage } from "@fit-grocer/utils";

export const Cart = () => {
    const { navigateToPreviousPage } = useNavigatePage();
    const { cart, removeFromCart } = useCartContext();

    return (
        <div>
            <div className="relative min-h-[calc(100vh-8rem)] 2xl:min-h-[calc(100vh-10rem)] 3xl:min-h-[calc(100vh-14rem)]">
                <div className="px-6 pt-10 sm:px-10 lg:px-16 xl:px-32 2xl:px-60 2xl:pt-16 3xl:pt-24">
                    <div className="flex items-center justify-between">
                        <LeftArrowIcon
                            className="cursor-pointer"
                            onClick={navigateToPreviousPage}
                            width="2.5rem"
                            height="2.5rem"
                        />
                        <span className="w-2/3 font-poppins text-2xl font-semibold">My Bucket</span>
                    </div>

                    <div className="mt-10">
                        {cart.map((cartItem) => (
                            <div key={cartItem.id}>
                                <CartItem product={cartItem} removeFromCart={removeFromCart} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative flex items-center justify-between">
                <div className="absolute left-6 top-6 pb-10 font-inter text-lg md:left-10 md:top-10 lg:left-16 lg:top-6 xl:left-32 xl:top-4 2xl:left-60 2xl:top-10 3xl:top-16 3xl:text-xl">
                    Total
                    <p className="text-3xl 3xl:mt-2 3xl:text-4xl">
                        1122 <span className="text-orange">{" $"}</span>
                    </p>
                </div>
                <button
                    // onClick={handleAddToCart}
                    className="flex-end absolute right-6 top-8 flex min-w-min items-center rounded-full bg-orange px-6 py-3 text-2xl text-white md:right-10 md:top-10 lg:right-16 lg:top-8 xl:right-32 xl:top-6 2xl:right-60 2xl:top-14 3xl:top-20  "
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};
