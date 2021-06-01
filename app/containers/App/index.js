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
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import HomePage from 'pages/HomePage/Loadable';
import BrowsePage from 'pages/Browse/Loadable';
import WatchPage from 'pages/Watch/Loadable';
import LatestPage from 'pages/Latest/Loadable';
import SearchPage from 'pages/Search/Loadable';
import LogoutPage from 'pages/Logout/Loadable';
import LoginPage from 'pages/Login/Loadable';
import SignUpPage from 'pages/SignUp/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import * as ROUTES from 'utils/routes';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        {/*
          <Redirect exact from={ROUTES.HOME} to={ROUTES.BROWSE} />
        */}
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route
          path={ROUTES.BROWSE}
          render={routeProps => <BrowsePage {...routeProps} />}
        />
        <Route exact path={ROUTES.WATCH} component={WatchPage} />
        <Route exact path={ROUTES.LATEST} component={LatestPage} />
        <Route exact path={ROUTES.SEARCH} component={SearchPage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.LOGOUT} component={LogoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
