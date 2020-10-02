import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import FAQ from './pages/FAQ/FAQ'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = props => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shows/category/:categoryId' component={Category} />
        <Route exact path='/faq' component={FAQ} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App