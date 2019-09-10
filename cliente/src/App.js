import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './componentes/Header';
import Clientes from './componentes/Clientes';


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError:  ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError)
  }
})

function App() {
  return (
    <ApolloProvider  client={client} >
      <Header />
      <Clientes />
    </ApolloProvider>
  );
}

export default App;
