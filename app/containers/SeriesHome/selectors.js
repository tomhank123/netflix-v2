import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the seriesHome state domain
 */

const selectSeriesHomeDomain = state => state.seriesHome || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SeriesHome
 */

const makeSelectSeriesHome = () =>
  createSelector(
    selectSeriesHomeDomain,
    substate => substate,
  );

export default makeSelectSeriesHome;
export { selectSeriesHomeDomain };
