type ProductImageProps = {
    src: string;
    alt: string;
    isSmallScreen?: boolean;
};

export const ProductImage = (props: ProductImageProps) => {
    const { src, alt, isSmallScreen } = props;

    return (
        <div
            className={`md:mt-8 md:flex md:w-full md:justify-end 2xl:mt-16
            ${isSmallScreen ? "md:hidden" : "hidden"}`}
        >
            <img
                src={src}
                alt={alt}
                className="drop-shadow-3xl md:drop-shadow-3xl h-52 w-52 rounded-full md:h-72 md:w-72 md:rounded-3xl 2xl:h-96 2xl:w-96"
            />
        </div>
    );
};
