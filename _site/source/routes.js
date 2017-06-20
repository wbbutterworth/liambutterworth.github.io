import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import NotFound from 'containers/NotFound';

/**
 * application container routes
 *
 * @return { element } react element
 */

const Routes = () => (

  <Router>
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route component={ NotFound } />
    </Switch>
  </Router>

);

export default Routes;