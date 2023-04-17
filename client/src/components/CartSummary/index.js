import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import CheckoutButton from '../Stripe';

function CartSummary() {
    const [state, dispatch] = useStoreContext();

    function calculateOrderTotal() {
        let sum = 0;
        state.order.forEach(donut => {
            sum += donut.price * donut.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function calculateOrderQuantity() {
        let sum = 0;
        state.order.forEach(donut => {
            sum += donut.purchaseQuantity;
        });
        return sum;
    }

    return (
        <>
            <section className="cart-page-sidebar">
                <div className="cart-summary-box">
                    <div className="cart-summary-name">Summary</div>
                    <div className="cart-summary-line"></div>
                    <div className="cart-total">
                        <div>Total ( <span id="cart-total-qty">{calculateOrderQuantity()}</span> )</div>
                        <span className="summary-total">${calculateOrderTotal()}</span>
                    </div>
                    <CheckoutButton />
                </div>
                <div className="cart-summary-cc"><img src="/images/ccards.png" alt="payment-cards"
                    width="100%"></img></div>
            </section>
        </>
    )
}

export default CartSummary;