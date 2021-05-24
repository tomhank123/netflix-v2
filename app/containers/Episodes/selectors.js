import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the episodes state domain
 */

const selectEpisodesDomain = state => state.episodes || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Episodes
 */

const makeSelectEpisodes = () =>
  createSelector(
    selectEpisodesDomain,
    substate => substate,
  );

export default makeSelectEpisodes;
export { selectEpisodesDomain };
