import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import reactRouterToArray from 'react-router-to-array';

import Loading from 'components/atoms/loading-indicator';

// Home
const Home = lazy(() => import('components/pages/Home'));
const Users = lazy(() => import('components/pages/Users'));
const Contact = lazy(() => import('components/pages/Contact'));
// 404
const FourOhFour = lazy(() => import('components/pages/404'));

const Main = () => {
  console.log('Main.js');
  const routes = [
    <Route exact path="/" component={Home} />,
    <Route exact path="/users" component={Users} />,
    <Route exact path="/contact" component={Contact} />,
  ];

  routes.push(
    <Fragment>
      {/* eslint-disable */}
      <Route path="*" component={(props) => (<FourOhFour {...props} routes={reactRouterToArray(routes)} />)} />
      {/* eslint-enable */}
    </Fragment>,
  );
  console.log(routes);
  return (
    <Fragment>
      <Helmet><html lang="en-GB" /></Helmet>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes}
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );
};

export default Main;
