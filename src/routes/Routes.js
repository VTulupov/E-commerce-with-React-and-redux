import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './../components/homePage/HomePage';
import NotFound from './../components/NotFound/NotFound';
import Phone from './../components/Phone/Phone';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/phones/:id' component={Phone} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
