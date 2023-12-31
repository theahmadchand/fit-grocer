type WishItemProps = {
    name: string;
    src: string;
    alt: string;
    quantity: number;
    price: number;
};

export const WishItem = (props: WishItemProps) => {
    const { name, src, alt, quantity, price } = props;

    return (
        <div className="mb-6 flex h-28 rounded-[1.25rem] bg-white shadow-md">
            <div className="ms-2 mt-2 w-44">
                <img className="h-24 rounded-2xl" src={src} alt={alt} />
            </div>
            <div className="flex w-full flex-col justify-evenly">
                <p className="font-poppins text-sm font-medium">{name}</p>
                <div className="flex justify-between">
                    <p className="font-poppins text-sm text-gray">Quantity {quantity}</p>
                    <p className="me-4 font-poppins text-sm font-medium text-orange">
                        {"$ "}
                        <span className="text-black">{price}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
