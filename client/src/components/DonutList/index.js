import React, { useEffect } from "react";
import DonutItem from '../DonutItem';
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_DONUTS } from "../../utils/actions";
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_DONUTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function DonutList() {
    const [state, dispatch] = useStoreContext();

    // Not exactly sure which state should be recognized
    const {  } = state;

    const { loading, data } = useQuery(QUERY_GET_ALL_DONUTS);

    useEffect(() => {

    }, [data, loading, dispatch]);

    return (
        <>
        
        </>
    )
}

export default DonutList;