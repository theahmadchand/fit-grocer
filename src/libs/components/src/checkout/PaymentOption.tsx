type PaymentOptionProps = {
    name: string;
    imageSrc: string;
    imageAlt: string;
    hasDivider?: boolean;
    defaultChecked?: boolean;
};

export const PaymentOption = (props: PaymentOptionProps) => {
    const { name, imageSrc, imageAlt, hasDivider, defaultChecked } = props;

    return (
        <div>
            <div className="mx-8 flex h-28 items-center justify-between">
                <div className="flex">
                    <img src={imageSrc} alt={imageAlt} />
                    <label
                        htmlFor={imageAlt}
                        className="bg-gray-200 hover:bg-gray-300 inline-block cursor-pointer px-4 py-2"
                    >
                        {name}
                    </label>
                </div>
                <input
                    defaultChecked={defaultChecked}
                    type="radio"
                    id={imageAlt}
                    name="payment-method"
                    className="h-4 w-4 cursor-pointer rounded-full checked:h-4 checked:w-4"
                />
            </div>
            {hasDivider && <div className="mx-6 h-px bg-zinc-200" />}
        </div>
    );
};
