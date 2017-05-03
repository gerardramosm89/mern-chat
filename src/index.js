import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
import '../styles/main.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  BrowserRouter,
  Route,

} from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>header</h1>
        <Route path="/" component={Chat} />
      </div>
    </BrowserRouter>
    {/*<App />*/}
  </Provider>
  ,document.getElementById('root')
);