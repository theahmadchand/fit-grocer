type ProductDescriptionProps = {
    description: string;
    isSmallScreen?: boolean;
};

export const ProductDescription = (props: ProductDescriptionProps) => {
    const { description, isSmallScreen } = props;

    return (
        <div
            className={`left-6 right-6 pb-10 2xl:flex 2xl:flex-col
                        ${isSmallScreen ? "2xl:hidden" : "hidden"}`}
        >
            <p className="mb-2 font-poppins text-lg font-semibold 2xl:mb-4 3xl:text-xl">Description</p>
            <p className="font-poppins text-gray 3xl:text-lg">{description}</p>
        </div>
    );
};
