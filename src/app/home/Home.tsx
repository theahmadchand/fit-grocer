import { Cards, Categories, Layout } from "@fit-grocer/components";
import { categories, products } from "../../data";

export const Home = () => {
    return (
        <Layout>
            <Categories categories={categories} />
            <Cards products={products} />
        </Layout>
    );
};
