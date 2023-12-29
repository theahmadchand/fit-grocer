type SectionProps = {
    title: string;
    actionButtonTitle: string;
    actionButtonLink: string;
};

export const Section = (props: SectionProps) => {
    const { title, actionButtonTitle, actionButtonLink } = props;

    return (
        <div className="mb-6 ">
            <div className="flex justify-between font-poppins font-medium md:text-xl">
                <span>{title}</span>
                <span className="text-orange">
                    <a href={actionButtonLink}>{actionButtonTitle}</a>
                </span>
            </div>
        </div>
    );
};
