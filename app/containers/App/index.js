/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import BrowsePage from 'pages/Browse/Loadable';
import WatchPage from 'pages/Watch/Loadable';
import LatestPage from 'pages/Latest/Loadable';
import SearchPage from 'pages/Search/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RouteHandler from 'components/RouteHandler';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from={ROUTES.HOME} to={ROUTES.BROWSE} />
        <Route
          path={ROUTES.BROWSE}
          render={routeProps => <BrowsePage {...routeProps} />}
        />
        <Route exact path={ROUTES.WATCH} component={WatchPage} />
        <Route exact path={ROUTES.LATEST} component={LatestPage} />
        <RouteHandler handler="SearchRoute" exact path={ROUTES.SEARCH}>
          <SearchPage />
        </RouteHandler>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
