import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/Register';
import List from './pages/List';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/List" component={List} />
      </Switch>
    </BrowserRouter>
  );
}
