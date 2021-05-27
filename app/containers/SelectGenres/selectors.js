import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the selectGenres state domain
 */

const selectSelectGenresDomain = state => state.selectGenres || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SelectGenres
 */

const makeSelectSelectGenres = () =>
  createSelector(
    selectSelectGenresDomain,
    substate => substate,
  );

export default makeSelectSelectGenres;
export { selectSelectGenresDomain };
