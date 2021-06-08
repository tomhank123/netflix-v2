import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the billboard state domain
 */

const selectHerosDomain = state => state.billboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Billboard
 */

const makeSelectHeros = () =>
  createSelector(
    selectHerosDomain,
    substate => substate,
  );

const makeSelectBillboard = () =>
  createSelector(
    selectHerosDomain,
    substate => substate.billboard,
  );

export default makeSelectHeros;
export { makeSelectBillboard };
