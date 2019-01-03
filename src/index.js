
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {Container} from './components/containers/Container';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider  } from 'react-apollo';
import ApolloClient from 'apollo-boost';



const client = new ApolloClient({
  uri:"http://localhost:4001"
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <Router>       
        <Container />
      </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
