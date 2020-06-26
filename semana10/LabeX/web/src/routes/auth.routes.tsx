import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Admin from '../pages/Painel/dashboard';
import CreateTrips from '../pages/Painel/CreateTrips';

export default function Routes() {
  return (
    <Switch>
      <Route path="/admin/" exact component={Admin} />
      <Route path="/admin/cadastrar-viagem" component={CreateTrips} />
    </Switch>
  );
}
