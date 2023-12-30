type CategoryProps = {
    name: string;
    url: string;
};

function getCategoryColor(name: string) {
    return name === "Salad" ? "bg-mint" : name === "Steak" ? "bg-pink" : name === "Chicken" ? "bg-peach" : "bg-mint";
}

export const Category = (props: CategoryProps) => {
    const { name, url } = props;

    return (
        <div className="me-4 cursor-pointer sm:me-6 lg:me-8">
            <div
                className={`${getCategoryColor(
                    name
                )} relative min-h-16 min-w-36 rounded-md md:min-h-20 md:min-w-40 xl:min-h-24 xl:min-w-48`}
            >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${url})` }}>
                    <p className="ps-2 pt-2 font-poppins text-sm font-normal md:text-base xl:text-lg">{name}</p>
                </div>
            </div>
        </div>
    );
};
