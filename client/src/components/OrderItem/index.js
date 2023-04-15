import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_DONUT_FROM_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const OrderItem = ({ donut }) => {

    const [, dispatch] = useStoreContext();

    return (
        <>
            <div class="cart-product-list-item">
                <div class="cart-product-list-item-right">
                    <div class="cart-donutpic"><img src={donut.image}
                        alt={donut.name} width="100%"></img></div>
                    <div class="cart-selected-qty">
                        <div class="cart-item-qty-text">QTY</div>
                        <input size="2" class="cart-item-qty-amount"></input>
                    </div>
                    <div class="cart-product-name">{donut.name}</div>
                </div>
                <button class="cart-final-delete-btn"> icon </button>
            </div>
        </>
    )
};

export default OrderItem;