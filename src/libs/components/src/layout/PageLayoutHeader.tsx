import { LeftArrowIcon } from "@fit-grocer/utils";

type PageLayoutHeaderProps = {
    title?: string;
    navigateButtonCallback: () => void;
};

export const PageLayoutHeader = (props: PageLayoutHeaderProps) => {
    const { title, navigateButtonCallback } = props;

    return (
        <div className="3xl:my-18 my-10 2xl:my-14">
            <div className="flex items-center justify-between">
                <LeftArrowIcon
                    className="cursor-pointer"
                    onClick={navigateButtonCallback}
                    width="2.5rem"
                    height="2.5rem"
                />
                {title && (
                    <span className="flex w-full justify-center font-poppins text-2xl font-semibold">{title}</span>
                )}
            </div>
        </div>
    );
};
