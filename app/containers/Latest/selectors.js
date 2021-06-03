import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the latest state domain
 */

const selectLatestDomain = state => state.latest || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Latest
 */

const makeSelectLatest = () =>
  createSelector(
    selectLatestDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectLatestDomain,
    substate => substate.collections,
  );

export default makeSelectLatest;
export { makeSelectCollections };
