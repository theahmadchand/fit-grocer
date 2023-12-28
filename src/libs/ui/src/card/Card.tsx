import HeartSvg from "../assets/heart.svg";
import type { Product } from "./types";

type CardProps = {
    product: Product;
};

export const Card = (props: CardProps) => {
    const {
        product: { name, price, imageSrc, imageAlt, href },
    } = props;

    return (
        <a href={href} className="group w-40 sm:w-60">
            <div className="rounded-t-3xl aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div className="bg-white px-4 py-2 rounded-b-3xl w-full h-20">
                <h3 className="text-sm font-medium">{name}</h3>
                <span className="flex justify-between">
                    <p className="text-lg font-medium text-gray-900">
                        <span className="text-[#e74c1b] font-poppins text-base font-medium">$ </span>
                        {price}
                    </p>
                    <img src={HeartSvg} alt="Heart icon" />
                </span>
            </div>
        </a>
    );
};
