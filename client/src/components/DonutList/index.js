import React, { useEffect } from "react";
import DonutItem from '../DonutItem';
import OrderSidebar from "../OrderSidebar";
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
                    <div id="flavors" className="flavors-title">
                        <h1>The Flavors</h1>
                        <span className="flavors-span">Donut worry, we've got your flavor cravings covered!</span>
                    </div>
                    <section className="donut-flavor-grid">
                        {state.donuts.length ? (
                            state.donuts.map((donut => (
                                <DonutItem
                                    key={donut._id}
                                    _id={donut._id}
                                    name={donut.name}
                                    description={donut.description}
                                    price={donut.price}
                                    image={donut.image}
                                />
                            )))
                        ) : (
                            <h3>You don't have any donuts yet!</h3>
                        )}
                    </section>
                </div>
                <OrderSidebar />
            </section>
        </>
    )
}

export default DonutList;