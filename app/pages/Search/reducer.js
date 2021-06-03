/*
 *
 * BrowseMyList reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { COLLECTIONS, KEYWORDS } from './actions';

export const initialState = {
  collections: {
    loading: false,
    error: false,
    items: false,
  },
  keywords: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const searchReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COLLECTIONS[REQUEST]:
        draft.collections.loading = true;
        break;

      case COLLECTIONS[SUCCESS]:
        draft.collections.loading = false;
        draft.collections.error = false;
        reduceCollections(action.response, draft);
        break;

      case COLLECTIONS[FAILURE]:
        draft.collections.loading = false;
        draft.collections.error = action.response;
        break;

      case KEYWORDS[REQUEST]:
        draft.keywords.loading = true;
        break;

      case KEYWORDS[SUCCESS]:
        draft.keywords.loading = false;
        draft.keywords.error = false;
        reduceKeywords(action.response, draft);
        break;

      case KEYWORDS[FAILURE]:
        draft.keywords.loading = false;
        draft.keywords.error = action.response;
        break;
    }
  });

export default searchReducer;

function reduceCollections(response, draft) {
  draft.collections.items = response.map(({ title, data }) => ({
    title,
    data: data.results,
  }));
}

function reduceKeywords(response, draft) {
  draft.keywords.items = response.results.filter((_, index) => index < 10);
}
