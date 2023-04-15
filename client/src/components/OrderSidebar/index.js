import React, { useEffect } from "react";
import DonutItem from '../DonutItem';
import { useStoreContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import { TOGGLE_ORDER, ADD_MULTIPLE_TO_ORDER } from "../../utils/actions";
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function OrderSidebar() {
    const [state, dispatch] = useStoreContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        async function getOrder() {
            const order = await idbPromise('order', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_ORDER, donuts: [...order] });
        }

        if (!state.order.length) {
            getOrder();
        }
    }, [state.order.length, dispatch]);

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
        <>
            <section className="cart-main">
                <div className="cart-page-container">
                    <div className="cart-order-title">Your Order</div>
                    <div className="cart-page-columns">
                        <div className="cart-items">
                            {state.order.length ? (
                                <>
                                    <div className="flavor-total">TOTAL ( <span className="flavor-span">${calculateOrderTotal()}</span> )</div>

                                    {state.order.map((donut) => (
                                        <OrderItem key={donut._id} orderItem={donut} />
                                    ))}

                                    <div className="cart-checkout">
                                        {Auth.loggedIn() ? (
                                            <button className="cart-btn btn-blue btn-small">VIEW CART</button>
                                        ) : (
                                            <button className="cart-btn btn-blue btn-small">Log in to get your donuts!</button>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <h3>
                                    Need to add items to your cart
                                </h3>
                            )}
                            <div className="cart-product-empty">
                                <img src="/images/cart-plus.svg" width="100%"></img>
                            </div>
                            {/* <div className="cart-product-empty">
                                <img src="/images/cart-plus.svg" width="100%"></img>
                            </div>
                            <div className="cart-product-empty">
                                <img src="/images/cart-plus.svg" width="100%"></img>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default OrderSidebar;