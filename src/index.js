import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.css';
import {
  BrowserRouter,
  Route,
  Switch, 
  Link
} from 'react-router-dom';

// Components
import BlogsIndex from './components/blogs_index';
import BlogsNew from './components/blogs_new';
import Chat from './components/Chat';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>header</h1>
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>
        <Switch>
          <Route path="/blogs/new" component={BlogsNew} /> 
          <Route path="/chat" component={Chat} />
          <Route path="/" component={BlogsIndex} />
        </Switch>

      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root')
);