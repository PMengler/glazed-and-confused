import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  ApolloProvider,
  ApolloClient, 
  InMemoryCache, 
  createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import '../src/styles/app.css';
import '../src/styles/cart.css';
import '../src/styles/flavors.css';
import '../src/styles/footer.css';
import '../src/styles/header.css';
import '../src/styles/home.css';
import '../src/styles/normalize.css';


import Flavors from './pages/Flavors';
import Home from './pages/Home';
import { StoreProvider } from './utils/GlobalState';

//TODO: Create Home Page

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

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/flavors'
            element={<Flavors />}
          />
        </Routes>
      </Router>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
