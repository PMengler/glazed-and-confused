import React from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY } from '../../utils/actions';
import { idbPromies } from '../../utils/helpers';

function Popup(donut) {
    // const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        description,
        price,
        image
    } = donut;

    // const { order } = state

    // Functions for handling donut being added to order

    return (
        <>
            <div className="popup-window">
                <section className="popup-container">
                    <div className="popup-swirl"><img src="../assets/swirl-blue.svg" alt="swirl" width="100%"></img></div>
                    <a className="close" href="#home">CLOSE</a>
                    <div className="popup-section">
                        <div className="donut-pic"><img src={image}></img>
                        </div>
                        <div className="popup-info">
                            <h2>{name}</h2>
                            <p className="popup-p">{description}
                            </p>
                            </div>
                        </div>
                        <div className="popup-footer">
                            <div className="ingredients"> icon Contains:<span className='allergies'>Milk, Wheat, Egg</span></div>
                            <div className="popup-addtocart-box">
                                <span className="popup-addtocart">ADD TO CART</span>
                                <button className="popup-btn">icon</button>
                            </div>
                        </div>
                </section>
            </div>
        </>
    );
}

export default Popup;