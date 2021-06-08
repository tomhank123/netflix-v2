import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the browse state domain
 */

const selectBrowseDomain = state => state.browse || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Browse
 */

const makeSelectBrowse = () =>
  createSelector(
    selectBrowseDomain,
    substate => substate,
  );

const makeSelectCollections = () =>
  createSelector(
    selectBrowseDomain,
    substate => substate.collections,
  );

const makeSelectBillboard = () =>
  createSelector(
    selectBrowseDomain,
    substate => substate.billboard,
  );

export default makeSelectBrowse;
export { makeSelectCollections, makeSelectBillboard };
