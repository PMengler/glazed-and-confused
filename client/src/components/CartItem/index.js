import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { REMOVE_DONUT_FROM_ORDER } from "../../utils/actions";
import { BiTrash } from 'react-icons/bi';

function CartItem(item) {
    const [state, dispatch] = useStoreContext();

    const removeFromOrder = (donut) => {
        dispatch({
            type: REMOVE_DONUT_FROM_ORDER,
            _id: donut._id
        });
        idbPromise('order', 'delete', { ...item.donut });
    };

    return (
        <>
            <div className="cart-product-list-item">
                <div className="cart-product-list-item-right">
                    <div className="cart-donutpic">
                        <img src={`/images/${item.donut.image}`}
                            alt="Donut Pic" width="100%">
                        </img>
                    </div>
                    <div className="cart-selected-qty">
                        <div className="cart-item-qty-text">{item.donut.purchaseQuantity}</div>
                        
                    </div>
                    <div className="cart-product-name">{item.donut.name}</div>
                </div>
                <button className="cart-final-delete-btn" onClick={() => removeFromOrder(item.donut)}> <BiTrash /> </button>
            </div>
        </>
    )
}

export default CartItem;