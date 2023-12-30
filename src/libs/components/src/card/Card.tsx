import { Link } from "react-router-dom";
import { HeartIcon } from "@fit-grocer/utils";
import type { Product } from "../product";

type CardProps = {
    product: Product;
    isFavourite: boolean;
    toggleFavourite: () => void;
};

export const Card = (props: CardProps) => {
    const {
        product: { id, name, price, imageSrc, imageAlt },
        isFavourite,
        toggleFavourite,
    } = props;

    return (
        <div className="w-38 group sm:w-56 lg:w-auto">
            <Link to={`/products/${id}`}>
                <div className="aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
            </Link>
            <div className="flex h-20 w-full flex-col justify-evenly rounded-b-3xl bg-white px-4 py-2">
                <h3 className="font-poppins text-sm font-medium lg:text-base">{name}</h3>
                <span className="flex justify-between">
                    <p className="text-gray-900 font-poppins text-lg font-medium">
                        <span className="text-base font-medium text-orange">{"$ "}</span>
                        {price}
                    </p>
                    <span className="cursor-pointer" onClick={toggleFavourite}>
                        <HeartIcon
                            height="1.25rem"
                            width="1.25rem"
                            strokeWidth={2}
                            fill={isFavourite ? "var(--color-orange)" : "none"}
                            stroke={isFavourite ? "var(--color-orange)" : "black"}
                        />
                    </span>
                </span>
            </div>
        </div>
    );
};