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
import RouteHandler from 'components/RouteHandler';

import * as ROUTES from 'utils/routes';
import { useAuthListener } from 'hooks';
import GlobalStyle from '../../global-styles';

export default function App() {
  const { user } = useAuthListener();

  return (
    <div>
      <Switch>
        {/*
          <Redirect exact from={ROUTES.HOME} to={ROUTES.BROWSE} />
        */}
        <RouteHandler
          handler="ProtectedRouteWithComponent"
          user={user}
          path={ROUTES.BROWSE}
          component={BrowsePage}
        />
        <RouteHandler
          handler="ProtectedRoute"
          exact
          user={user}
          path={ROUTES.WATCH}
        >
          <WatchPage />
        </RouteHandler>
        <RouteHandler
          handler="ProtectedRoute"
          exact
          user={user}
          path={ROUTES.LATEST}
        >
          <LatestPage />
        </RouteHandler>
        <RouteHandler
          handler="ProtectedRoute"
          exact
          user={user}
          path={ROUTES.SEARCH}
        >
          <SearchPage />
        </RouteHandler>

        <RouteHandler
          handler="IsUserRedirect"
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <HomePage />
        </RouteHandler>
        <RouteHandler
          handler="IsUserRedirect"
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.LOGIN}
        >
          <LoginPage />
        </RouteHandler>
        <RouteHandler
          handler="IsUserRedirect"
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <SignUpPage />
        </RouteHandler>
        <RouteHandler
          handler="IsUserRedirect"
          exact
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.LOGOUT}
        >
          <LogoutPage />
        </RouteHandler>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
