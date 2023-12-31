import { CartItem, PageLayout } from "@fit-grocer/components";
import { useCartContext, useNavigatePage } from "@fit-grocer/utils";

export const Cart = () => {
    const { navigateToCheckout } = useNavigatePage();
    const { cart, removeFromCart } = useCartContext();

    return (
        <PageLayout
            pageTitle="My Bucket"
            priceTitle="Total"
            price={4251}
            actionButtonTitle="Add to Card"
            actionButtonCallback={navigateToCheckout}
        >
            <div className="mt-10">
                {cart.map((cartItem) => (
                    <div key={cartItem.id}>
                        <CartItem product={cartItem} removeFromCart={removeFromCart} />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};
