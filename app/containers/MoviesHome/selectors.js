import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the moviesHome state domain
 */

const selectMoviesHomeDomain = state => state.moviesHome || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MoviesHome
 */

const makeSelectPopularMovies = () =>
  createSelector(
    selectMoviesHomeDomain,
    homeState => homeState.popularMovies,
  );

const makeSelectMoviesHome = () =>
  createSelector(
    selectMoviesHomeDomain,
    substate => substate,
  );

export default makeSelectMoviesHome;
export { makeSelectPopularMovies, selectMoviesHomeDomain };
