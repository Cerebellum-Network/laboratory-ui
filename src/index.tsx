import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/rootReducer';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {
  HashRouter as Router,
} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import accountTransactionsSaga from './modules/accountTransactions/sagas';
import friendBotSaga from './modules/friendBot/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(accountTransactionsSaga);
sagaMiddleware.run(friendBotSaga);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
