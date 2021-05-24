import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the player state domain
 */

const selectPlayerDomain = state => state.player || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Player
 */

const makeSelectPlayer = () =>
  createSelector(
    selectPlayerDomain,
    substate => substate,
  );

export default makeSelectPlayer;
export { selectPlayerDomain };
