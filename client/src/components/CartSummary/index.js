import React from "react";

function CartSummary() {

    return (
        <>
            <section class="cart-page-sidebar">
                <div class="cart-summary-box">
                    <div class="cart-summary-name">Summary</div>
                    <div class="cart-summary-line"></div>
                    <div class="cart-total">
                        <div>Price a Piece</div> <span class="summary-total">$2.99</span>
                    </div>
                    <div class="cart-total">
                        <div>Total ( <span id="cart-total-qty">18</span> )</div>
                        <span class="summary-total">$53.82</span>
                    </div>
                    <button class="cart-summary-btn btn-blue btn-small"> CHECKOUT </button>
                </div>
                <div class="cart-summary-cc"><img src="/images/ccards.png" alt="payment-cards"
                    width="100%"></img></div>
            </section>
        </>
    )
}

export default CartSummary;