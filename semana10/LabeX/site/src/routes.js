import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';

import Admin from './Panel/Control';
import NewTrip from './Panel/NewTrip';
import NewUser from './Panel/NewUser';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/login" component={Login} />

      <Route path="/admin/" exact component={Admin} />
      <Route path="/admin/novo-usuario" exact component={NewTrip} />
      <Route path="/admin/nova-viagem" exact component={NewUser} />
    </BrowserRouter>
  );
}
