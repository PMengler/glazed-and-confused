import { useReducer } from 'react';
import {
  UPDATE_DONUTS,
  ADD_DONUT_TO_ORDER,
  REMOVE_DONUT_FROM_ORDER,
  UPDATE_ORDER_QUANTITY,
  ADD_MULTIPLE_TO_ORDER,
  ADD_ORDER_TO_USERORDER,
  CLEAR_ORDER,
  TOGGLE_ORDER
} from './actions';

export const reducer = (state, action) => {

  switch (action.type) {
    case UPDATE_DONUTS:
      return {
        ...state,
        donuts: [...action.donuts],
      };

    case ADD_DONUT_TO_ORDER:
      return {
        ...state,
        order: [...state.order, action.donut]
      };

    case REMOVE_DONUT_FROM_ORDER:
      let newState = state.order.filter((donut) => {
        return donut._id !== action._id;
      });

      return {
        ...state,
        orderOpen: newState.length > 0,
        order: newState,
      };

    case UPDATE_ORDER_QUANTITY:
      return {
        ...state,
        orderOpen: true,
        order: state.order.map((donut) => {
          if (action._id === donut._id) {
            donut.purchaseQuantity = action.purchaseQuantity;
          }
          return donut;
        }),
      };

    case ADD_MULTIPLE_TO_ORDER:
      return {
        ...state,
        order: [...action.donuts]
      };

    case ADD_ORDER_TO_USERORDER:
      return {
        ...state,
        userOrders: [...state, action.order]
      };

    case CLEAR_ORDER:
      return {
        ...state,
        orderOpen: false,
        order: [],
      }

    case TOGGLE_ORDER:
      return {
        ...state,
        orderOpen: !state.orderOpen,
      };

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
