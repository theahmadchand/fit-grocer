import { PageLayout, PaymentOption } from "@fit-grocer/components";
import { useNavigatePage } from "@fit-grocer/utils";

export const Checkout = () => {
    const { navigateToCheckout } = useNavigatePage();

    return (
        <PageLayout
            pageTitle="Checkout"
            priceTitle="Total"
            price={4251}
            actionButtonTitle="Pay Now"
            actionButtonCallback={navigateToCheckout}
        >
            <div className="mt-10">
                <div>
                    <p className="font-poppins text-2xl font-semibold">Payment</p>
                    <div className="my-10 flex flex-col items-center">
                        <div className="w-full rounded-3xl bg-white drop-shadow-sm">
                            <PaymentOption
                                name="Debit/Credit Card"
                                imageSrc="/master-card.png"
                                imageAlt="master-card"
                                hasDivider
                                defaultChecked
                            />
                            <PaymentOption name="Paypal" imageSrc="/paypal.png" imageAlt="paypal" hasDivider />
                            <PaymentOption name="Payoneer" imageSrc="/payoneer.png" imageAlt="payoneer" />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-poppins text-2xl font-semibold">Delivery details</p>
                    <div className="my-10 text-gray">
                        <p>789 Maple Street, Los Angeles,</p>
                        <p>CA 90001</p>
                        <p>(888) 987-6543</p>
                    </div>
                </div>

                <div>
                    <p className="font-poppins text-2xl font-semibold">Order details</p>
                    <div className="my-10 flex text-gray">
                        <div className="w-1/2">
                            <p>1x Green salad</p>
                            <p>1x fresh vegetable</p>
                            <p>1x Mixed salad</p>
                        </div>
                        <div className="w-1/2">
                            <p>3x Grilled steak</p>
                            <p>1x vegan cake</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
