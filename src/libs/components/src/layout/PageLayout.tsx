import { ReactElement } from "react";
import { PageLayoutHeader } from "./PageLayoutHeader";

type PageLayoutProps = {
    children: ReactElement;
    pageTitle?: string;
    priceTitle?: string;
    price?: number;
    actionButtonTitle?: string;
    actionButtonCallback?: () => void;
    navigateButtonCallback: () => void;
};

export const PageLayout = (props: PageLayoutProps) => {
    const { children, pageTitle, priceTitle, price, actionButtonTitle, navigateButtonCallback, actionButtonCallback } =
        props;

    return (
        <div>
            <div className="relative min-h-[calc(100vh-8rem)] 2xl:min-h-[calc(100vh-10rem)] 3xl:min-h-[calc(100vh-14rem)]">
                <div className="px-6 sm:px-10 lg:px-16 xl:px-32 2xl:px-60">
                    <PageLayoutHeader title={pageTitle} navigateButtonCallback={navigateButtonCallback} />

                    {children}
                </div>
            </div>
            <div
                className={`relative mx-6 flex h-[5.5rem] items-center md:mx-12 lg:mx-16 xl:mx-32 2xl:mx-60 3xl:h-32 
                ${priceTitle && price ? "justify-between" : "justify-center"} `}
            >
                {priceTitle && price && (
                    <div className="font-inter text-lg md:left-10 md:top-10 lg:left-16 lg:top-6 xl:left-32 xl:top-4 2xl:left-60 2xl:top-10 3xl:top-16 3xl:text-xl">
                        Total
                        <p className="text-3xl 3xl:mt-2 3xl:text-4xl">
                            1122 <span className="text-orange">{" $"}</span>
                        </p>
                    </div>
                )}

                {actionButtonTitle && actionButtonCallback && (
                    <button
                        onClick={actionButtonCallback}
                        className="flex min-w-min items-center justify-center rounded-full bg-orange px-6 py-3 text-2xl text-white md:right-10 md:top-10 lg:right-16 lg:top-8 xl:right-32 xl:top-6 2xl:right-60 2xl:top-14 3xl:top-20"
                    >
                        {actionButtonTitle}
                    </button>
                )}
            </div>
        </div>
    );
};
