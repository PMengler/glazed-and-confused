import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY  } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import { idbPromise } from '../../utils/helpers';


function DonutItem(donut) {
    const [state, dispatch] = useStoreContext();

    const { order } = state;

    const addToOrder = () => {
        const donutInOrder = order.find((orderDonut) => orderDonut._id === _id)

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
            donut: { ...donut, purchaseQuantity: 1 }
        });
        idbPromise('order', 'put', { ...donut, purchaseQuantity: 1 });
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