import { PageLayout } from "@fit-grocer/components";
import { useNavigatePage } from "@fit-grocer/utils";

export const OrderPlaced = () => {
    const { navigateToHome } = useNavigatePage();

    return (
        <PageLayout
            actionButtonTitle="Return Home"
            navigateButtonCallback={navigateToHome}
            actionButtonCallback={navigateToHome}
        >
            <div className="flex flex-col items-center justify-center text-center">
                <div className="mt-14">
                    <p className="mb-2 font-poppins text-2xl font-semibold">{`"Congratulations!"`}</p>
                    <p className="font-poppins text-2xl font-semibold">Your Order Has Been Placed!</p>
                    <img className="my-16" src="/rider.png" alt="rider" />
                    <p className="w-96 font-poppins text-gray">
                        Thank you for choosing our services! Your order has been successfully placed and is now being
                        processed. We appreciate your trust in us and look forward to serving you.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};
