import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
// import {stripeProducts} from '@stripe/react-stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { useStoreContext } from "../../utils/GlobalState";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function CheckoutButton() {
  const stripe = useStripe();
  const [state, dispatch] = useStoreContext();
  const [currentOrder, setCurrentOrder] = useState({});
  const { userOrders, order } = state;
  let orderNum;


  const handleClick = async () => {
    orderNum = order;
    setCurrentOrder({ orderNum })

    let numberOfDonuts = 0;
    for (let i = 0; i < state.order.length; i++) {
      numberOfDonuts = numberOfDonuts + state.order[i].purchaseQuantity;
    }

    for (let i = 0; i < userOrders.length; i++) {
      if (userOrders[i] === orderNum) {
        console.log('dup')
      } else {
        return
      }
    }


    //TODOBJS
    // const url = new URL(context.headers.referer).originF;
    //const order = new Order({ products: args.products });
    // const line_items = [];

    // // const { products } = await order.populate('products');

    // for (let i = 0; i < state.order.length; i++) {
    //    const product = await stripe.products.create({
    //      name: state.order[i].id,
    //    }); 
    // //     description: products[i].description,
    // //     images: [`${url}/images/${products[i].image}`]
    //    //});

    //    const price = await stripe.prices.create({
    //      product: product.id,
    //      unit_amount: products[i].price * 100,
    //      currency: 'usd',
    //    });

    //    line_items.push({
    //      price: price.id,
    //      quantity: 1
    //    });
    // }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1Mxy4uBFISeLbxNY2XKAcfut', quantity: numberOfDonuts }],
      mode: 'payment',

      //   //For deployment
      //   successUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',
      //   cancelUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',

      //   //For local development
        successUrl: 'http://localhost:3000/ThankYou',
        cancelUrl: 'http://localhost:3000/ThankYou',
    });

    if (error) {
      console.log(error);
    }
  }
  return (
    <button className="cart-summary-btn btn-blue btn-small" onClick={handleClick}>Checkout</button>
  );
}

function CheckoutUseStripe() {
  return (
    <footer className='footer-bottom'>
      <Elements stripe={stripePromise}>
        <CheckoutButton />
      </Elements>
    </footer>
  );
}


export default CheckoutUseStripe;