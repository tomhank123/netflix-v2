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
const makeSelectMoviesHome = () =>
  createSelector(
    selectMoviesHomeDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectMoviesHomeDomain,
    homeState => homeState.collections,
  );

export default makeSelectMoviesHome;
export { selectMoviesHomeDomain, makeSelectCollections };
