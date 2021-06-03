import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myList state domain
 */

const selectSearchDomain = state => state.search || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BrowseMyList
 */

const makeSelectSearch = () =>
  createSelector(
    selectSearchDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.collections,
  );

const makeSelectKeywords = () =>
  createSelector(
    selectSearchDomain,
    substate => substate.keywords,
  );

export default makeSelectSearch;
export { makeSelectCollections, makeSelectKeywords };
