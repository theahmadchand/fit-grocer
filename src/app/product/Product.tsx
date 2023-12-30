import { ProductItem } from "@fit-grocer/components";
import type { Product as ProductType } from "@fit-grocer/components";
import { useParams } from "react-router-dom";
import { products } from "../../data";

export const Product = () => {
    const { productId } = useParams();
    const selectedProduct = products.filter((product) => product.id === Number(productId))?.at(0) as ProductType;

    return <ProductItem product={selectedProduct} />;
};
