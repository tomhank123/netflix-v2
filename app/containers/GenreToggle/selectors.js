import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the genreToggle state domain
 */

const selectGenreToggleDomain = state => state.genreToggle || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GenreToggle
 */

const makeSelectGenreToggle = () =>
  createSelector(
    selectGenreToggleDomain,
    substate => substate,
  );

export default makeSelectGenreToggle;
export { selectGenreToggleDomain };
