import React from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

function Cart() {

    return (
        <>
            <section class="cart-main">
                <div class="cart-page-container">
                    <div class="cart-order-title">Your Order</div>
                    <div class="cart-page-columns">
                        <div class="cart-items"></div>
                        <div class="cart-items">
                            <CartItem />
                        </div>
                    <CartSummary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;