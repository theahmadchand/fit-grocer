import { MinusCircleIcon, PlusCircleIcon } from "@fit-grocer/utils";
import { useQuantityCounter } from "./useQuantityCounter";

export const QuantitySelector = () => {
    const { quantity, increaseQuantity, decreaseQuantity } = useQuantityCounter();

    return (
        <div className="flex w-10 flex-col items-center text-orange md:w-full md:flex-row">
            <PlusCircleIcon className="cursor-pointer" onClick={increaseQuantity} width="2.5rem" height="2.5rem" />
            <span className="m-4 font-inter text-3xl text-black">{quantity}</span>
            <MinusCircleIcon className="cursor-pointer" onClick={decreaseQuantity} width="2.5rem" height="2.5rem" />
        </div>
    );
};
