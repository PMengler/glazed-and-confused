import React, { useEffect } from "react";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";
import { ADD_MULTIPLE_TO_ORDER } from "../utils/actions";

function Cart() {
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


    return (
        <>
            <section className="cart-main">
                <div className="cart-page-container">
                    <div className="cart-order-title">Your Order</div>
                    <div className="cart-page-columns">
                        <div className="cart-items"></div>
                        <div className="cart-items">
                            {state.order.map((donut) => (
                                <CartItem donut={donut} key={donut._id}/>
                            ))}
                        </div>
                    <CartSummary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;