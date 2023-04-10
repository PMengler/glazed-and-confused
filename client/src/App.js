import logo from './logo.svg';
import '../src/styles/';

import Header from './components/Header';
import { ApolloProvider } from '@apollo/client';
import { Router } from 'react-router-dom';

const client = new ApolloClient({
  
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />

      </Router>
    </ApolloProvider>
  );
}

export default App;
