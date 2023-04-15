import React, { useEffect } from "react";
import DonutItem from '../DonutItem';
import { useStoreContext } from "../../utils/GlobalState";
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
    
    return (
        <>
            <div className="cart-sidebar">
                <div className="cart-container">
                    <div className="cart-yourcart">Your Cart
                        <div className="cart-line"></div>
                    </div>
                    <div className="flavors-pricing">$3.00 per donut</div>
                    {/* <div className="flavor-total">TOTAL ( <span className="flavor-span">18</span> )</div> */}
                    {/* <div className="flavor-total-price">$54.00</div> */}


                    <div className="cart-product-card">
                    </div>
                    <div className="cart-product-empty">
                        <img src="/images/cart-plus.svg" width="100%"></img>
                    </div>
                    <div className="cart-product-empty">
                        <img src="/images/cart-plus.svg" width="100%"></img>
                    </div>
                    <div className="cart-product-empty">
                        <img src="/images/cart-plus.svg" width="100%"></img>
                    </div>
                </div>
                <div className="cart-checkout">
                    <button className="cart-btn btn-blue btn-small">VIEW CART</button>
                </div>
            </div>
        </>
    )
};

export default OrderSidebar;