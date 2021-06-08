import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the heros state domain
 */

const selectHerosDomain = state => state.heros || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Heros
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
