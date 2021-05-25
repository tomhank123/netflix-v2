/*
 *
 * MoviesHome reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { COLLECTIONS } from './actions';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  collections: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const moviesHomeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COLLECTIONS[REQUEST]:
        draft.collections.loading = true;
        break;

      case COLLECTIONS[SUCCESS]:
        draft.collections.loading = false;
        draft.collections.error = false;
        reduceFetchCollections(action.response, draft);
        break;

      case COLLECTIONS[FAILURE]:
        draft.collections.loading = false;
        draft.collections.error = action.response;
        break;

      case DEFAULT_ACTION:
        break;
    }
  });

export default moviesHomeReducer;

function reduceFetchCollections(response, draft) {
  draft.collections.items = response.map(({ title, data }) => ({
    title,
    data: data.results.filter((_, index) => index < 7),
  }));
}
