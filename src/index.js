import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import promise from "redux-promise";

import Homepage from './components/home.js'
import Direct from './components/direct.js'
import SideMenu from './components/sidemenu.js'
import Login from './components/login.js'
import SearchBar from './containers/search_bar.js'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:location/:vid/:id" component={Direct} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
