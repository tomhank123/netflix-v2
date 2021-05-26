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

// import HomePage from 'containers/HomePage/Loadable';
import BrowsePage from 'pages/Browse/Loadable';
import WatchPage from 'pages/Watch/Loadable';
import LatestPage from 'pages/Latest/Loadable';
import MyListPage from 'pages/MyList/Loadable';
import SearchPage from 'pages/Search/Loadable';

import MoviesHome from 'containers/MoviesHome/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from={ROUTES.HOME} to={ROUTES.BROWSE} />
        <Route exact path={ROUTES.BROWSE} component={BrowsePage} />
        <Route exact path={ROUTES.WATCH} component={WatchPage} />
        <Route exact path={ROUTES.LATEST} component={LatestPage} />
        <Route exact path={ROUTES.MY_LIST} component={MyListPage} />
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />

        <Route exact path={ROUTES.MOVIES} component={MoviesHome} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
