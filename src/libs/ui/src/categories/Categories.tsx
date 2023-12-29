import { Section } from "../section";
import { Category as CategoryItem } from "./Category";
import type { Category } from "./types";

type CategoriesProps = {
    categories: Category[];
};
export const Categories = (props: CategoriesProps) => {
    const { categories } = props;

    return (
        <div className="my-8">
            <div className="mx-4 sm:mx-10 lg:mx-16 xl:mx-32 2xl:mx-60">
                <Section title="Categories" actionButtonTitle="See all" actionButtonLink="/" />
            </div>

            <div className="ms-4 flex overflow-x-scroll sm:ms-10 lg:ms-16 xl:ms-32 2xl:ms-60">
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem name={category.name} url={category.url} />
                    </div>
                ))}
            </div>
        </div>
    );
};
