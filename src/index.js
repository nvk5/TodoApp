import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import ErrorBoundry from './components/ErrorBoundry';
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);