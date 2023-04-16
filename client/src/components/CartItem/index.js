import React from "react";

function CartItem() {

    return (
        <div class="cart-items">
            <>
                <div class="cart-product-list-item">
                    <div class="cart-product-list-item-right">
                        <div class="cart-donutpic"><img src="../assets/gc-blackberry-b.jpg"
                            alt="butterscotch pic" width="100%"></img></div>
                        <div class="cart-selected-qty">
                            <div class="cart-item-qty-text">QTY</div>
                            <input size="2" class="cart-item-qty-amount"></input>
                        </div>
                        <div class="cart-product-name">Blackberry Bliss Donut</div>
                    </div>
                    <button class="cart-final-delete-btn"> icon </button>
                </div>
            </>
        </div>
    )
}

export default CartItem;