import type { Product } from "./types";
import { LeftArrowIcon, HeartIcon, StarIcon, PlusCircleIcon, MinusCircleIcon } from "@fit-grocer/utils";
import { useQuantityCounter } from "./useQuantityCounter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
    product: Product;
};

export const ProductItem = (props: ProductItemProps) => {
    const {
        product: { name, category, rating, description, imageSrc, imageAlt, price },
    } = props;

    const { quantity, increaseQuantity, decreaseQuantity } = useQuantityCounter();
    const [isFavourite, setIsfavourite] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className="min-h-[48rem] flex-grow rounded-b-[3rem] bg-white">
                <div className="px-6 pt-12 sm:px-10 lg:px-16 lg:pt-14 xl:px-32 xl:pt-24 2xl:px-60">
                    <div className="flex items-center justify-between">
                        <LeftArrowIcon onClick={() => navigate("..")} width="2.5rem" height="2.5rem" />
                        <HeartIcon
                            onClick={() => setIsfavourite((previous) => !previous)}
                            width="2rem"
                            height="2rem"
                            strokeWidth="1.5"
                            fill={isFavourite ? "var(--color-orange)" : "none"}
                            stroke={isFavourite ? "var(--color-orange)" : "black"}
                        />
                    </div>
                    <div className="pt-8 font-poppins text-base font-semibold">{name}</div>
                    <div className="py-2 font-poppins text-sm font-normal text-gray">{category}</div>
                    <div className="flex items-center">
                        <StarIcon className="text-bright-yellow" width="1.5rem" height="1.5rem" />
                        <span className="ms-2 font-poppins"> {rating}</span>
                    </div>
                    <div className="flex  items-center justify-between">
                        <div className="my-20 ms-2 flex w-10 flex-col items-center text-orange">
                            <PlusCircleIcon onClick={increaseQuantity} width="2.5rem" height="2.5rem" />
                            <span className="my-2 font-inter text-3xl text-black">{quantity}</span>
                            <MinusCircleIcon onClick={decreaseQuantity} width="2.5rem" height="2.5rem" />
                        </div>
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="ms-8 h-full w-72 rounded-full object-cover object-left"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="mb-2 font-poppins text-lg font-semibold">Description</p>
                        <p className="font-poppins text-gray">{description}</p>
                    </div>
                </div>
            </div>
            <div className="relative flex h-32 items-center justify-center">
                <div className="flex justify-between">
                    <div className="absolute bottom-6 left-6 right-6 top-6 font-inter text-lg">
                        Price
                        <p className="text-3xl">
                            {price} <span className="text-orange">{" $"}</span>
                        </p>
                    </div>
                    <button className="flex-end absolute bottom-8 right-6 top-8 flex min-w-min items-center rounded-full bg-orange px-6 py-3 text-2xl text-white">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
