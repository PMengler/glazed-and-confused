import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function CheckoutButton() {
  const stripe = useStripe();

  const handleClick = async () => {
    //TODOBJS
    // const url = new URL(context.headers.referer).originF;
    // const order = new Order({ products: args.products });
    // const line_items = [];

    // const { products } = await order.populate('products');

    // for (let i = 0; i < products.length; i++) {
    //   const product = await stripe.products.create({
    //     name: products[i].name,
    //     description: products[i].description,
    //     images: [`${url}/images/${products[i].image}`]
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
    // }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'price_1Mw96NBFISeLbxNY0T43FU7Z', quantity: 20 }],
      mode: 'payment',

      //For deployment
      successUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',
      cancelUrl: 'https://glazed-and-confused.herokuapp.com/ThankYou',
      
      //For local development
      // successUrl: 'http://localhost:3000/ThankYou',
      // cancelUrl: 'http://localhost:3000/ThankYou',
    });

    if (error) {
      console.log(error);
    }
  };

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