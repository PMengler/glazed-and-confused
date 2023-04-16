import React, { useEffect, useState } from "react";
import OrderItem from '../OrderItem';
import { useStoreContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import { TOGGLE_ORDER, ADD_MULTIPLE_TO_ORDER } from "../../utils/actions";
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Link } from "react-router-dom";

function OrderSidebar() {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        async function getOrder() {
            const donutsAddedToOrder = await idbPromise('order', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_ORDER, donuts: [...donutsAddedToOrder] });
        }

        if (!state.order.length) {
            getOrder();
        }

    }, [dispatch]);

    function toggleOrder() {
        dispatch({ type: TOGGLE_ORDER });
    }

    function calculateOrderTotal() {
        let sum = 0;
        state.order.forEach(donut => {
            sum += donut.price * donut.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    return (
        <div className="cart-sidebar">
            <div className="cart-container">
                <div className="cart-yourcart">Your Cart
                    <div className="cart-line"></div>
                </div>
                {state.order.length > 0 ? (
                    <>
                        <div className="flavor-total">TOTAL ( <span className="flavor-span">${calculateOrderTotal()}</span> )</div>
                        <br></br>
                        {state.order.map((donut) => (
                            <OrderItem donut={donut} key={donut._id} />
                        ))}
                    </>
                ) : (
                    <>
                        <div className="flavor-total">
                            Go ahead and grab a donut already!
                        </div>
                        <br></br>
                        <div className="cart-product-empty">
                            <img src="/images/cart-plus.svg" width="100%"></img>
                        </div>
                    </>
                )}
            </div>
            <div className="cart-checkout">
                {Auth.loggedIn() ? (
                    <>
                        <Link to={'/cart'}>
                            <button className="cart-btn btn-blue btn-small">VIEW CART</button>
                        </Link>
                    </>
                ) : (
                    <Link to={'/loginRegister'}>
                        <button className="cart-btn btn-blue btn-small">Log in to get your donuts!</button>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default OrderSidebar;