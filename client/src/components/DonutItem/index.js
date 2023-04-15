import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useStoreContext } from '../../utils/GlobalState';



function DonutItem(donut) {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        image,
        name,
    } = donut;

    const { cart } = state;

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)

        if (itemInCart) {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: _id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        } else {
        dispatch({
            type: ADD_TO_CART,
            product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
    }
    
    return (
        <figure className="flavors-card">
            <Link to={`/flavors/${_id}`}>
                <img
                    alt={name}
                    src={`/images/${image}`}
                    width="100%"
                />
            </Link>
            <div className="flavors-info">
                <div>{name}</div>
                <button className="flavors-cart">
                    <AiOutlineShoppingCart />
                </button>
            </div>
        </figure>
    )
}

export default DonutItem;