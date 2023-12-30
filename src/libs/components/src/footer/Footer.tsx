import { CartIcon, HeartIcon, HomeIcon, OrderIcon, ProfileIcon } from "@fit-grocer/utils";

export const Footer = () => {
    return (
        <footer className="sticky bottom-0 left-0 right-0 bg-slate lg:hidden">
            <div className="flex h-20 items-center justify-around">
                <span className="text-orange">
                    <HomeIcon height="2rem" width="2rem" />
                </span>
                <span className="text-gray">
                    <HeartIcon height="2rem" width="2rem" />
                </span>
                <span>
                    <CartIcon height="3rem" width="3rem" />
                </span>
                <span className="text-gray">
                    <OrderIcon height="2rem" width="2rem" />
                </span>
                <span className="text-gray">
                    <ProfileIcon height="2rem" width="2rem" />
                </span>
            </div>
        </footer>
    );
};
