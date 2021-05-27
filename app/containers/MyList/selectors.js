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
 * Default selector used by MyList
 */

const makeSelectMyList = () =>
  createSelector(
    selectMyListDomain,
    substate => substate,
  );

export default makeSelectMyList;
export { selectMyListDomain };
