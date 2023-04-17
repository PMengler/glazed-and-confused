import React, { useEffect, useState } from 'react';
import PastOrderItem from '../PastOrderItem';
import PastOrderEmpty from '../PastOrderEmpty';
import { ADD_MULTIPLE_TO_ORDER, ADD_ORDER_TO_USERORDER } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

function PastOrderCard() {

    const [state, dispatch] = useStoreContext();
    const [currentOrder, setCurrentOrder] = useState({});
    const { userOrders } = state;
    const { loading, data } = useQuery(ADD_ORDER_TO_USERORDER);

    const orderNumber = 0;
    console.log(state)

    useEffect(() => {
        async function getOrder() {
            const donutsAddedToOrder = await idbPromise('order', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_ORDER, donuts: [...donutsAddedToOrder] });
        }

        if (!state.order.length) {
            getOrder();
        }

    }, [dispatch]);

    // useEffect(() => {
    //     if (data) {

    //     }
    // })




    const addOrderToUserOrder = () => {
        const orderInUserOrder = userOrders.find((order) => order._id === )
        if (donutInOrder) {
            dispatch({
                type: UPDATE_ORDER_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(donutInOrder.purchaseQuantity) + 1
            });
            idbPromise('order', 'put', {
                ...donutInOrder,
                purchaseQuantity: parseInt(donutInOrder.purchaseQuantity) + 1
            });
        } else {
            dispatch({
                type: ADD_DONUT_TO_ORDER,
                donut: { ...currentDonut, purchaseQuantity: 1 }
            });
            idbPromise('order', 'put', { ...currentDonut, purchaseQuantity: 1 });
        }
    }





    

    return (
        // Will handle if order is empty
        <>
            <div className="account-order-block">
                <div className="order">Order<span className="account-order-number"> {orderNumber} Items</span> </div>
                <div className="account-divider"></div>
                <ul className="account-order-items-list">
                    {state.order.map((donut) => (
                        <PastOrderItem key={donut._id} name={donut.name} quantity={donut.purchaseQuantity}/>
                    ))}
                </ul>
                <div className="account-divider"></div>
                <div className="account-box">
                    <div className="account-total-text">TOTAL PRICE </div>
                    <div className="account-order-total">$71.76</div>
                </div>
                <div className="account-divider"></div>
                <a className="account-reorder">REORDER</a>
            </div>
        </>
    )
};

export default PastOrderCard;