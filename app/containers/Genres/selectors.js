import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the genres state domain
 */

const selectGenresDomain = state => state.genres || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Genres
 */

const makeSelectGenres = () =>
  createSelector(
    selectGenresDomain,
    substate => substate,
  );

export default makeSelectGenres;
export { selectGenresDomain };
