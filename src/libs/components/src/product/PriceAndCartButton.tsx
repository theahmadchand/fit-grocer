import { useCartContext } from "@fit-grocer/utils";
import { Product } from "./types";

type PriceAndCartButtonProps = {
    product: Product;
    actionButtonCallback: () => void;
};

export const PriceAndCartButton = (props: PriceAndCartButtonProps) => {
    const { product, actionButtonCallback } = props;
    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        addToCart(product);
        actionButtonCallback();
    };

    return (
        <div className="relative flex h-0 items-center justify-between lg:h-0 xl:h-0">
            <div className="absolute left-6 top-6 font-inter text-lg md:left-10 md:top-10 lg:left-16 lg:top-6 xl:left-32 xl:top-4 2xl:left-60 2xl:top-10 3xl:top-16 3xl:text-xl">
                Price
                <p className="text-3xl 3xl:mt-2 3xl:text-4xl">
                    {product.price} <span className="text-orange">{" $"}</span>
                </p>
            </div>
            <button
                onClick={handleAddToCart}
                className="flex-end absolute right-6 top-8 flex min-w-min items-center rounded-full bg-orange px-6 py-3 text-2xl text-white md:right-10 md:top-10 lg:right-16 lg:top-8 xl:right-32 xl:top-6 2xl:right-60 2xl:top-14 3xl:top-20  "
            >
                Add to Cart
            </button>
        </div>
    );
};
