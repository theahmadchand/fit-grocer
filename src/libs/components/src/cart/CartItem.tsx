import { DeleteIcon } from "@fit-grocer/utils";
import type { Product } from "../product";

type CartItemProps = {
    product: Product;
    removeFromCart: (productId: number) => void;
};

export const CartItem = (props: CartItemProps) => {
    const { product, removeFromCart } = props;
    const { id, name, imageSrc, imageAlt, quantity, price } = product;

    return (
        <div className="mb-6 flex h-28 rounded-[1.25rem] bg-white shadow-md">
            <div className="ms-2 mt-2 w-44">
                <img className="h-24 rounded-2xl" src={imageSrc} alt={imageAlt} />
            </div>
            <div className="flex w-full flex-col justify-evenly">
                <p className="font-poppins text-sm font-medium">{name}</p>
                <div className="flex justify-between">
                    <p className="font-poppins text-sm text-gray">Quantity {quantity || 1}</p>
                    <div className="me-4 flex ">
                        <p className="me-4 font-poppins text-sm font-medium text-orange">
                            {"$ "}
                            <span className="text-black">{price}</span>
                        </p>
                        <DeleteIcon
                            className="cursor-pointer"
                            onClick={() => removeFromCart(id)}
                            height="1.25rem"
                            width="1.25rem"
                            strokeWidth={2}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
