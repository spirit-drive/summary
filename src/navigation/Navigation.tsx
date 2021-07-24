import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';

export const Navigation = memo(() => (
  <Switch>
    <Route path="*">
      <Home />
    </Route>
  </Switch>
));
