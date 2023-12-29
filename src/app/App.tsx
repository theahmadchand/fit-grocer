import { Layout, Categories, Cards } from "@fit-grocer/ui";
import { categories, products } from "../data";

export default function App() {
    return (
        <Layout>
            <Categories categories={categories} />
            <Cards products={products} />
        </Layout>
    );
}