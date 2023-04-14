import React from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY} from '../../utils/actions';
import { idbPromies } from '../../utils/helpers';

function Popup(donut) {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        description,
        price,
        image
    } = donut;

    const { order } = state
    
    // Functions for handling donut being added to order

    return (
        <>

        </>
    );
}

export default Popup;