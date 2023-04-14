import { useReducer } from 'react';
import {
  // UPDATE_USER,
  // LOGIN,
  NEW_ORDER,
  ADD_DONUT_TO_ORDER,
  // ADD_TO_CART || Add donut to order
  REMOVE_DONUT_FROM_ORDER,
  // REMOVE_FROM_CART || Remove donut from order
  UPDATE_ORDER_QUANTITY
  // UPDATE_CART_QUANTITY || Update order quantity
  ADD_MULTIPLE_TO_ORDER
  // ADD_MULTIPLE_TO_CART,
  // CLEAR_CART,
  // TOGGLE_CART,
} from './actions';

export const reducer = (state, action) => {

  switch (action.type) {
    case ADD_DONUT_TO_ORDER:
      return {
        ...state,
        donuts: [...action.donuts]
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
        order: [...state.order, ...action.donuts]
      };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: [],
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen,
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory,
//       };

//     default:
//       return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
