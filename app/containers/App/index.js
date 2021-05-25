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

import HomePage from 'containers/HomePage/Loadable';
import MoviesHome from 'containers/MoviesHome/Loadable';
import SeriesHome from 'containers/SeriesHome/Loadable';
import Episodes from 'containers/Episodes/Loadable';
import Player from 'containers/Player/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
// import Browse from 'containers/Browse/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Redirect exact from={ROUTES.HOME} to={ROUTES.BROWSE} />
        <Route exact path={ROUTES.BROWSE} component={HomePage} />
        <Route exact path={ROUTES.MOVIES} component={MoviesHome} />
        <Route exact path={ROUTES.SERIES} component={SeriesHome} />
        <Route exact path={ROUTES.MY_LIST} component={SearchPage} />
        <Route exact path={ROUTES.PLAYER} component={Player} />
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
        <Route exact path={ROUTES.LATEST} component={SearchPage} />
        <Route exact path="/episodes" component={Episodes} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
