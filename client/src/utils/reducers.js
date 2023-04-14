import { useReducer } from 'react';
import {
  // UPDATE_USER,
  // LOGIN,
  NEW_ORDER,
  ADD_DONUT_TO_ORDER,
  REMOVE_DONUT_FROM_ORDER,
  // ADD_TO_CART || Add donut to order
  // UPDATE_CART_QUANTITY || update order quantity
  // REMOVE_FROM_CART || remove 
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
    };
      //     case REMOVE_FROM_CART:
      //       let newState = state.cart.filter((product) => {
      //         return product._id !== action._id;
      //       });
      
      //       return {
      //         ...state,
      //         cartOpen: newState.length > 0,
      //         cart: newState,
      //       };
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };

//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map((product) => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity;
//           }
//           return product;
//         }),
//       };


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
