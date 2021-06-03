import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myList state domain
 */

const selectMyListDomain = state => state.myList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BrowseMyList
 */

const makeSelectMyList = () =>
  createSelector(
    selectMyListDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectMyListDomain,
    substate => substate.collections,
  );

export default makeSelectMyList;
export { makeSelectCollections };
