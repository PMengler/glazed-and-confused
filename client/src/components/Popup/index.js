import React from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_DONUT_TO_ORDER, UPDATE_ORDER_QUANTITY} from '../../utils/actions';
import { idbPromies } from '../../utils/helpers';