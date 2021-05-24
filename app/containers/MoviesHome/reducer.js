/*
 *
 * MoviesHome reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { DEFAULT_ACTION } from './constants';
import { POPULAR_MOVIES } from './actions';

export const initialState = {
  popularMovies: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const moviesHomeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POPULAR_MOVIES[REQUEST]:
        draft.popularMovies.loading = true;
        break;

      case POPULAR_MOVIES[SUCCESS]:
        draft.popularMovies.loading = false;
        reduceFetchPopularMovies(action.response, draft);
        break;

      case POPULAR_MOVIES[FAILURE]:
        draft.popularMovies.loading = false;
        draft.popularMovies.error = action.response;
        break;

      case DEFAULT_ACTION:
        break;
    }
  });

export default moviesHomeReducer;

function reduceFetchPopularMovies(response, draft) {
  draft.popularMovies.items = response.results.filter((_, idx) => idx < 3);
}
