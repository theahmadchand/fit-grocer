import { Section } from "../section";
import { Card } from "./Card";
import type { Product } from "../product/types";

type CardsProps = {
    products: Product[];
};

export const Cards = (props: CardsProps) => {
    const { products } = props;

    return (
        <div className="mx-4 my-6 sm:mx-10 lg:mx-16 xl:mx-32 2xl:mx-60">
            <Section title="Recommended Items" actionButtonTitle="Filter" actionButtonLink="/" />

            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-16 xl:gap-y-8 2xl:gap-12">
                    {products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Card product={product} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
