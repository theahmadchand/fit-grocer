import { Section } from "../section";
import { Card } from "./Card";
import type { Product } from "../product/types";
import { useToggleFavourite } from "./useToggleFavourite";

type CardsProps = {
    products: Product[];
};

export const Cards = (props: CardsProps) => {
    const { products } = props;
    const { favourites, toggleFavourite } = useToggleFavourite();

    return (
        <div className="mx-4 my-6 sm:mx-10 lg:mx-16 xl:mx-32 2xl:mx-60">
            <Section title="Recommended Items" actionButtonTitle="Filter" actionButtonLink="/" />

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-16 xl:gap-y-8 2xl:gap-x-20 2xl:gap-y-12">
                    {products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Card
                                    product={product}
                                    isFavourite={favourites[product.id] || false}
                                    toggleFavourite={() => toggleFavourite(product.id)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
