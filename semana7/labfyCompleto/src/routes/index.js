import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/browse';
import Playlist from '../pages/Playlist';

function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Browse} />
      <Route
        path="/playlists/:id/tracks"
        render={(child) => <Playlist {...child} />}
      />
    </Switch>
  );
}
export default routes;
