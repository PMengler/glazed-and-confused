import React, { useEffect } from "react";
import DonutItem from '../DonutItem';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DONUTS } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_DONUTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function DonutList() {
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_GET_ALL_DONUTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_DONUTS,
                donuts: data.donuts,
            });
            data.donuts.forEach((donut) => {
                idbPromise('donuts', 'put', donut);
            });
        } else if (!loading) {
            idbPromise('donuts', 'get').then((donuts) => {
                dispatch({
                    type: UPDATE_DONUTS,
                    donuts: donuts,
                });
            });
        }
    }, [data, loading, dispatch]);

    return (
        <>
            <section className="flavors-main">
                <div className="flavors-container">
                    <div className="flavors-title">
                        <h1>The Flavors</h1>
                        <span className="flavors-span">Donut worry, we've got your flavor cravings covered!</span>
                    </div>
                    <section className="donut-flavor-grid">
                        <DonutItem />
                    </section>
                </div>
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
                            <img src="../assets/cart-plus.svg" width="100%"></img>
                        </div>
                        <div className="cart-product-empty">
                            <img src="../assets/cart-plus.svg" width="100%"></img>
                        </div>
                        <div className="cart-product-empty">
                            <img src="../assets/cart-plus.svg" width="100%"></img>
                        </div>
                    </div>
                    <div className="cart-checkout">
                        <button className="cart-btn btn-blue btn-small">VIEW CART</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DonutList;