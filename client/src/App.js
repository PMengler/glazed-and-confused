import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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

import Header from './components/Header'
import Popup from './components/Popup';
import Flavors from './pages/Flavors';
import Home from './pages/Home';
import Account from './pages/Account';
import { StoreProvider } from './utils/GlobalState';
import LoginRegister from './pages/LoginRegister';
import ThankYou from './pages/ThankYou';


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
      <ApolloProvider client={client}>
        <StoreProvider>
          <Router>
            <Header />
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/flavors'
                element={<Flavors />}
              />
              <Route
                path='/loginRegister'
                element={<LoginRegister />}
              />
              {/* Just placed here for testing but need to place this in a more accurate spot */}
              <Route
                path='/flavors/:id'
                element={<Popup />}
              />
              <Route
                path='/thankyou'
                element={<ThankYou />}
              />
              <Route 
                path='/account'
                element={<Account />}
              />
            </Routes>
          </Router>
        </StoreProvider>
      </ApolloProvider>
    </Elements>
  );
}

export default App;
