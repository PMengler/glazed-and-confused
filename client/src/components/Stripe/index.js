import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/client';
require('dotenv').config();
// const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function CheckoutButton() {
  // const stripe = useStripe();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function handleClick() {
    //TODOBJS
    // const url = new URL(context.headers.referer).originF;

    // const order = new Order({ donuts: state.order });
    const line_items = [];
    console.log(state.order)
    const order = state.order;
    console.log(order)

    state.order.forEach((donut) => {
      for (let i = 0; i < donut.purchaseQuantity; i++) {
        line_items.push(donut._id);
      }
    });

    console.log(line_items)
    getCheckout({
      variables: { donuts: line_items },
    });

    // for (let i = 0; i < order.length; i++) {
    //   const item = await stripePromise.({
    //     name: order[i].name,
    //     description: order[i].description,
    //     images: [`${url}/images/${order[i].image}`]
    //   });

    //   const price = await stripe.prices.create({
    //     product: product.id,
    //     unit_amount: products[i].price * 100,
    //     currency: 'usd',
    //   });

    //   line_items.push({
    //     price: price.id,
    //     quantity: 1
    //   });
  }

  // const { error } = await stripe.redirectToCheckout({
  //   lineItems: [{ price: 'price_1Mw96NBFISeLbxNY0T43FU7Z', quantity: 20 }],
  //   mode: 'payment',

  //   //For deployment
  //   successUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',
  //   cancelUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',

  //   //For local development
  //   // successUrl: 'http://localhost:3000/ThankYou',
  //   // cancelUrl: 'http://localhost:3000/ThankYou',
  // });

  // if (error) {
  //   console.log(error);
  // }
  return (
    // <footer className='footer-bottom'>
      <Elements stripe={stripePromise}>
        <button className="cart-summary-btn btn-blue btn-small" onClick={handleClick}>Checkout</button>
      </Elements>
  );
};

// {/* </footer> */}

// function CheckoutUseStripe() {
  // return (
    // <footer className='footer-bottom'>
    //   <Elements stripe={stripePromise}>
    //   <button className="cart-summary-btn btn-blue btn-small" onClick={handleClick()}>Checkout</button>
    //   </Elements>
    // </footer>
  // );
// }

export default CheckoutButton;