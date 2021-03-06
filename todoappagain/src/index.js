import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import Todo from './Todo/index';
import reducer from './store/reducers/index';
import { createStore } from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);

let pstore = persistStore(store);

const app = (
  <Provider store={ store }>
    <PersistGate loading={ <p>loading...</p> }
      persistor={ pstore }>
        <Todo />
      </PersistGate>
  </Provider>
)

// 表示をレンダリング
ReactDOM.render(
  app,
  document.getElementById('root')
);

export default pstore;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
