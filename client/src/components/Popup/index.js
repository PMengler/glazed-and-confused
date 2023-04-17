import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { QUERY_GET_DONUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import '../../styles/popup.css'
import { useQuery } from "@apollo/client";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdHealthAndSafety } from 'react-icons/md';

function Popup() {
    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

    const [currentDonut, setCurrentDonut] = useState({});

    const { loading, data } = useQuery(QUERY_GET_DONUT);

    const { donuts, order } = state

    useEffect(() => {
        if (donuts.length) {
            setCurrentDonut(donuts.find((donut) => donut._id === id));
        }
    }, [data, loading, dispatch]);


    // Functions for handling donut being added to order
    const addDonutToOrder = () => {
        const donutInOrder = order.find((orderItem) => orderItem._id === currentDonut._id)
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
        <>
            <div className="popup-window">
                <section className="popup-container">
                    <div className="popup-swirl"><img src={"/images/swirl-blue.svg"} alt="swirl" width="100%"></img></div>
                    <Link to={'/flavors'}>
                        <p className="close">CLOSE</p>
                    </Link>
                    <div className="popup-section">
                        <div className="donut-pic">
                            <img src={`/images/${currentDonut.image}`}></img>
                        </div>
                        <div className="popup-info">
                            <h2>{currentDonut.name}</h2>
                            <p className="popup-p">{currentDonut.description}
                            </p>
                        </div>
                    </div>
                    <div className="popup-footer">
                        <div className="ingredients"><MdHealthAndSafety /> Contains:<span className='allergies'>Milk, Wheat, Egg</span></div>
                        <div className="popup-addtocart-box">
                            <span className="popup-addtocart">ADD TO CART</span>
                            <Link to={'/flavors'}>
                                <button className="popup-btn" onClick={addDonutToOrder}><AiOutlineShoppingCart /></button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Popup;