
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import Container from './components/containers/Container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <Container />
    </Router>
  </Provider>
,
 document.getElementById('root'));
registerServiceWorker();
