/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchbar = state => state.searchbar || initialState;

const makeSelectKeyword = () =>
  createSelector(
    selectSearchbar,
    internalState => internalState.keyword,
  );

export { makeSelectKeyword };
