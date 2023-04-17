import React from 'react';

function PastOrderItem(donut) {
    return (
        <>
            <li className="account-qty"> {donut.quantity} <span className="account-list">{donut.name}</span></li>
        </>
    )
};

export default PastOrderItem;