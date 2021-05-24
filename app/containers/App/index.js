/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from 'containers/HomePage/Loadable';
import MoviesHome from 'containers/MoviesHome/Loadable';
import SeriesHome from 'containers/SeriesHome/Loadable';
import Episodes from 'containers/Episodes/Loadable';
import Player from 'containers/Player/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies-home" component={MoviesHome} />
        <Route exact path="/series-home" component={SeriesHome} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/player" component={Player} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
