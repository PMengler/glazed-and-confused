import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PastOrderItem from '../PastOrderItem';
import PastOrderEmpty from '../PastOrderEmpty';
import { ADD_MULTIPLE_TO_ORDER, ADD_ORDER_TO_USERORDER } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

function PastOrderCard() {
    const [state, dispatch] = useStoreContext();
    const [currentOrder, setCurrentOrder] = useState({});
    const { userOrders, order } = state;

    let orderNumber = 0;
    console.log(state)

    if (order.length > 0) {
    orderNumber = order[0].order_id.length
    }

    useEffect(() => {
        async function getOrder() {
            const donutsAddedToOrder = await idbPromise('order', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_ORDER, donuts: [...donutsAddedToOrder] });
        }

        if (!state.order.length) {
            getOrder();
        }
    }, [dispatch]);

    function calculateOrderTotal() {
        let sum = 0;
        state.order.forEach(donut => {
            sum += donut.price * donut.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    return (
        <>
            <div className="account-order-block">
                <div className="order">Order<span className="account-order-number"> {orderNumber}</span> </div>
                <div className="account-divider"></div>
                <ul className="account-order-items-list">
                    {state.order.map((donut) => (
                        <PastOrderItem key={donut._id} name={donut.name} quantity={donut.purchaseQuantity}/>
                    ))}
                </ul>
                <div className="account-divider"></div>
                <div className="account-box">
                    <div className="account-total-text">TOTAL PRICE </div>
                    <div className="account-order-total">${calculateOrderTotal()}</div>
                </div>
                <div className="account-divider"></div>
                <Link to={'/cart'}>
                    <p className='account-reorder'>REORDER</p> 
                </Link>
            </div>
            <br></br>
        </>
    )
};

export default PastOrderCard;