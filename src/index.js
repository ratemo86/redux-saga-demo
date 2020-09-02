import "@babel/polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Counter from './counter'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import rootSaga  from './sagas'

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => action('INCREMENT_ASYNC')}
    onDecrement={() => action('DECREMENT')}
    onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
  document.getElementById('root')
)


const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  // ...options
});

const store = createStore(reducer,  applyMiddleware(sagaMiddleware, logger))

store.subscribe(() => {
  console.log("New State", store.getState());
  render();
  });
const action = type => {
  console.log("type is" , type)
  return store.dispatch({type})
}

render();

 /*  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT_ASYNC')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
    document.getElementById('root')
  ) */

sagaMiddleware.run(rootSaga); 




/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
