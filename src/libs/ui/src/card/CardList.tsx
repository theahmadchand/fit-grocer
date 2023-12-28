import { Card } from "./Card";
import type { Product } from "./types";

type CardListProps = {
    products: Product[];
};

export const CardList = (props: CardListProps) => {
    const { products } = props;

    return (
        <div className="flex justify-center mx-8 max-w-2xl px-12 py-24 md:mx-16 lg:max-w-full lg:px-10">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => {
                    return <Card key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};
