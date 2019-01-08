
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {Container} from './components/containers/Container';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider  } from 'react-apollo';
import {client} from './apolloClient';

// const client = new ApolloClient({
//   uri:"http://localhost:4001"
// })
// const client = new ApolloClient({
//   uri: 'http://localhost:4001',
//   clientState: {
//     defaults: {
//       isLoggedIn: true,
//       recipes: [],
//     },
//     resolvers,
//     typeDefs,

//   },
//   onError: ({ networkError, graphQLErrors }) => {
//     console.log('graphQLErrors', graphQLErrors)
//     console.log('networkError', networkError)
//   }
// })
ReactDOM.render(
  <ApolloProvider client={client}>
      <Router>       
        <Container />
      </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
