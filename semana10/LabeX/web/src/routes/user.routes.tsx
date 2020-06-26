import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Site/Home';
import About from '../pages/Site/About';
import Login from '../pages/Site/Login';
import Register from '../pages/Site/Register';
import ListTrips from '../pages/Site/ListTrips';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Register} />
      <Route path="/viagens" component={ListTrips} />
    </Switch>
  );
}
