import React, { Fragment } from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Header from './componentes/Layout/Header';
import Clientes from './componentes/Clientes/Clientes';
import NuevoCliente from './componentes/Clientes/NuevoCliente'
import EditarCliente from './componentes/Clientes/EditarCliente'

import NuevoProducto from './componentes/Productos/NuevoProducto'


const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
      addTypename: false
  }),
  onError:  ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError)
  }
})

function App() {
    return (
        <ApolloProvider  client={client} >
            <Router>
                <Fragment>
                    <Header />
                    <div className="container" >
                        <Switch>
                            <Route  exact path="/" component={ Clientes }   ></Route>
                            <Route  exact path="/cliente/editar/:id" component={ EditarCliente }   ></Route>
                            <Route  exact path="/cliente/nuevo" component={ NuevoCliente }   ></Route>

                            <Route  exact path="/productos/nuevo" component={  NuevoProducto }  ></Route>

                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ApolloProvider>
    );
}

export default App;
