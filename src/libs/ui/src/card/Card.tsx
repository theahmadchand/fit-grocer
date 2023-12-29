import { HeartIcon } from "../icons";
import type { Product } from "./types";

type CardProps = {
    product: Product;
};

export const Card = (props: CardProps) => {
    const {
        product: { name, price, imageSrc, imageAlt, href },
    } = props;

    return (
        <a href={href}>
            <div className="w-38 group sm:w-56 lg:w-auto">
                <div className="aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className="flex h-20 w-full flex-col justify-evenly rounded-b-3xl bg-white px-4 py-2">
                    <h3 className="font-poppins text-sm font-medium lg:text-base">{name}</h3>
                    <span className="flex justify-between">
                        <p className="text-gray-900 font-poppins text-lg font-medium">
                            <span className="text-base font-medium text-orange">{"$ "}</span>
                            {price}
                        </p>
                        <span className="text-black">
                            <HeartIcon height="1.25rem" width="1.25rem" />
                        </span>
                    </span>
                </div>
            </div>
        </a>
    );
};
