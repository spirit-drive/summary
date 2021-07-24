import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CommonLoading } from '../components/CommonLoading';

const Home = React.lazy(() => import('../screens/Home'));

const fallback = <CommonLoading />;

export const Main = memo(() => (
  <Switch>
    <Route path="/" exact>
      <Suspense fallback={fallback}>
        <Home />
      </Suspense>
    </Route>
  </Switch>
));
