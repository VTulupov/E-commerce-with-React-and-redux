import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './../components/homePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import Phone from './../components/Phone/Phone';
import CartPage from '../components/CartPage/CartPage';
import AddPhoneForm from '../components/AddPhoneForm/AddPhoneForm';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/cart' component={CartPage} />
        <Route path='/phones/:id' component={Phone} exact={true} />
        <Route path='/add-phone-form' component={AddPhoneForm} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
