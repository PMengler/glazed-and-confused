import React from 'react';
import { Router as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../src/styles/app.css';
import '../src/styles/cart.css';
import '../src/styles/flavors.css';
import '../src/styles/footer.css';
import '../src/styles/header.css';
import '../src/styles/home.css';
import '../src/styles/normalize.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutUseStripe from './components/Stripe';

import { setContext } from '@apollo/client/link/context';
import { 
  ApolloProvider,
  ApolloClient, 
  InMemoryCache, 
  createHttpLink } from '@apollo/client';
  
import Header from './components/Header';
import Hero from './components/Hero/index';
import WeeklyFlavor from './components/WeeklyFlavor';
import DonutStory from './components/DonutStory';
import ContactUs from './components/ContactUs';
import Popup from './components/Popup';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Hearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          {/* <Popup /> */}
          <Header />
          <Hero />
          <WeeklyFlavor />
          <DonutStory />
          <ContactUs />
        </ApolloProvider>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
