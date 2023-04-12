import React from 'react';
import { Router as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import '../src/styles/app.css';
import '../src/styles/cart.css';
import '../src/styles/flavors.css';
import '../src/styles/footer.css';
import '../src/styles/header.css';
import '../src/styles/home.css';
import '../src/styles/normalize.css';

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
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Header />
        <Hero />
        <WeeklyFlavor />
        <DonutStory />

      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
