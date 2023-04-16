import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { QUERY_ORDERS } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';
import { useQuery } from '@apollo/client';


function DonutItem(donut) {
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_ORDERS);

    const { order } = state;

    const addToOrder = () => {
        const donutInOrder = order.find((orderItem) => orderItem._id === donut._id)
        // This working now
        console.log(donutInOrder)
        if (donutInOrder) {
            alert('Already added to the cart!')
        } else {
        dispatch({
            type: ADD_DONUT_TO_ORDER,
            donut: { ...donut, purchaseQuantity: 1, order: data.orders }
        });
        idbPromise('order', 'put', { ...donut, purchaseQuantity: 1, order_id: data.orders });
        }
    }
    
    return (
        <figure className="flavors-card">
            <Link to={`/flavors/${donut._id}`}>
                <img
                    alt={donut.name}
                    src={`/images/${donut.image}`}
                    width="100%"
                />
            </Link>
            <div className="flavors-info">
                <div>{donut.name}</div>
                <button className="flavors-cart" onClick={addToOrder}> 
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </figure>
    )
}

export default DonutItem;