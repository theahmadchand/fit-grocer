import type { Product } from "./types";
import { NavigationAndFavoriteBar } from "./NavigationAndFavoriteBar";
import { PriceAndCartButton } from "./PriceAndCartButton";
import { QuantitySelector } from "./QuantitySelector";
import { ProductDetail } from "./ProductDetail";
import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";

type ProductItemProps = {
    product: Product;
};

export const ProductItem = (props: ProductItemProps) => {
    const {
        product: { name, category, rating, description, imageSrc, imageAlt, price },
    } = props;

    return (
        <div>
            <div className="relative min-h-[calc(100vh-8rem)] flex-grow rounded-b-[3rem] bg-white 2xl:min-h-[calc(100vh-10rem)] 3xl:min-h-[calc(100vh-14rem)]">
                <div className="px-6 pt-10 sm:px-10 lg:px-16 xl:px-32 2xl:px-60 2xl:pt-16 3xl:pt-24">
                    <NavigationAndFavoriteBar />

                    <div className="flex">
                        <div className="w-full">
                            <ProductDetail name={name} category={category} rating={rating} />

                            <div className="flex items-center justify-between py-14 md:h-0">
                                <QuantitySelector />
                                <ProductImage src={imageSrc} alt={imageAlt} isSmallScreen />
                            </div>
                            <ProductDescription description={description} />
                        </div>
                        <ProductImage src={imageSrc} alt={imageAlt} />
                    </div>

                    <ProductDescription description={description} isSmallScreen />
                </div>
            </div>

            <PriceAndCartButton price={price} />
        </div>
    );
};
