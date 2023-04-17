import React, { useEffect } from 'react';
import PastOrderItem from '../PastOrderItem';
import PastOrderEmpty from '../PastOrderEmpty';
import { ADD_MULTIPLE_TO_ORDER } from "../../utils/actions";
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

function PastOrderCard() {

    const [state, dispatch] = useStoreContext();

    const orderNumber = state.order.length;

    useEffect(() => {
        async function getOrder() {
            const donutsAddedToOrder = await idbPromise('order', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_ORDER, donuts: [...donutsAddedToOrder] });
        }

        if (!state.order.length) {
            getOrder();
        }

    }, [dispatch]);

    return (
        // Will handle if order is empty
        <>
            <div className="account-order-block">
                <div className="order">Order<span className="account-order-number">{orderNumber}</span> </div>
                <div className="account-divider"></div>
                <ul className="account-order-items-list">
                    {state.order.map((donut) => (
                        <PastOrderItem key={donut._id} donut={donut}/>
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