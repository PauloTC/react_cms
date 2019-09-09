import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

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
      <h1>Hola</h1>
    </ApolloProvider>
  );
}

export default App;
