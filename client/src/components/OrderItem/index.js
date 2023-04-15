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
        idbPromise('order', 'delete', { ...donut });
    };

    const onChange = (event) => {
        const value = event.target.value;
        if (value === '0') {
            dispatch({
                type: REMOVE_DONUT_FROM_ORDER,
                _id: donut._id
            });
            idbPromise('order', 'delete', { ...donut });
        } else {
            dispatch({
                type: UPDATE_ORDER_QUANTITY,
                _id: donut._id,
                purchaseQuantity: parseInt(value)
            });
            idbPromise('order', 'put', { ...donut, purchaseQuantity: parseInt(value) });
        }
    }
    return (
        <>
            <div className="cart-product-list-item">
                <div className="cart-product-list-item-right">
                    <div className="cart-donutpic"><img src={donut.image}
                        alt={donut.name} width="100%"></img></div>
                    <div className="cart-selected-qty">
                        <div className="cart-item-qty-text">QTY</div>
                        <input size="2" className="cart-item-qty-amount" value={donut.purchaseQuantity} onChange={onChange}></input>
                    </div>
                    <div className="cart-product-name">{donut.name}, ${donut.price}</div>
                </div>
                <button className="cart-final-delete-btn" onClick={() => removeFromOrder(donut)}> icon </button>
            </div>
        </>
    )
};

export default OrderItem;