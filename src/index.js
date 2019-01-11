
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import {Container} from './components/containers/Container';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider  } from 'react-apollo';
import {client} from './apolloClient';
import Pages from './pages';

ReactDOM.render(
  <ApolloProvider client={client}>
      <Router>       
        <Pages />
      </Router>
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
