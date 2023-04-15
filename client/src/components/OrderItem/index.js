import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_DONUT_FROM_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

const OrderItem = ({ donut }) => {

    const [, dispatch] = useStoreContext();

    const removeFromOrder = (donut) => {
        dispatch({
            type: REMOVE_DONUT_FROM_ORDER,
            _id: donut._id
        });
        idbPromise('order', 'delete', {...donut});
    };

    return (
        <>
            <div class="cart-product-list-item">
                <div class="cart-product-list-item-right">
                    <div class="cart-donutpic"><img src={donut.image}
                        alt={donut.name} width="100%"></img></div>
                    <div class="cart-selected-qty">
                        <div class="cart-item-qty-text">QTY</div>
                        <input size="2" class="cart-item-qty-amount" value={donut.purchaseQuantity} onChange={onChange}></input>
                    </div>
                    <div class="cart-product-name">{donut.name}, ${donut.price}</div>
                </div>
                <button class="cart-final-delete-btn" onClick={() => removeFromOrder(donut)}> icon </button>
            </div>
        </>
    )
};

export default OrderItem;