import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_DONUT_FROM_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { BiTrash } from 'react-icons/bi';

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
            <section className="card-container">
                <div className="product-name">{donut.name}</div>
                <div className="cart-img"><img src={`/images/${donut.image}`} width="100%"></img></div>
                <div className="quantity-delete-box">
                    <select className="quantity" onChange={onChange} value={donut.purchaseQuantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <button className="cart-delete-btn" onClick={() => removeFromOrder(donut)}><BiTrash /></button>
                </div>
            </section>
        </>
    )
};

export default OrderItem;