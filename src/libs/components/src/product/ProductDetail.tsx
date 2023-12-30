import { StarIcon } from "@fit-grocer/utils";

type ProductDetailProps = {
    name: string;
    category: string;
    rating: number;
};

export const ProductDetail = (props: ProductDetailProps) => {
    const { name, category, rating } = props;

    return (
        <div className="pt-8 2xl:pt-16">
            <div className="font-poppins text-base font-semibold md:text-2xl 3xl:text-3xl">{name}</div>
            <div className="py-2 font-poppins text-sm font-normal text-gray md:py-4 md:text-lg 3xl:text-xl">
                {category}
            </div>
            <div className="flex items-center">
                <StarIcon className="text-bright-yellow" width="1.5rem" height="1.5rem" />
                <span className="ms-2 font-poppins lg:text-lg 3xl:text-xl"> {rating}</span>
            </div>
        </div>
    );
};
