import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the browseGenre state domain
 */

const selectBrowseGenreDomain = state => state.browseGenre || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BrowseGenre
 */

const makeSelectBrowseGenre = () =>
  createSelector(
    selectBrowseGenreDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectBrowseGenreDomain,
    substate => substate.collections,
  );

export default makeSelectBrowseGenre;
export { makeSelectCollections };
