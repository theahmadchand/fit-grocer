import { CartItem } from "@fit-grocer/components";
import { LeftArrowIcon, useCartContext, useNavigatePage } from "@fit-grocer/utils";

export const Cart = () => {
    const { navigateToPreviousPage } = useNavigatePage();
    const { cart } = useCartContext();

    return (
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
                        <CartItem
                            src={cartItem.imageSrc}
                            alt={cartItem.imageAlt}
                            name={cartItem.name}
                            quantity={cartItem.id}
                            price={cartItem.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
