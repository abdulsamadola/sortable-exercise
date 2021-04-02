import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer, { initialState } from './store/reducer';
import App from './components/App/App';

const store = createStore(reducer, initialState, applyMiddleware(thunk));

const ConnectedApp = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
