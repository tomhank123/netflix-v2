/*
 *
 * BrowseGenre reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { COLLECTIONS, GENRES } from './actions';

export const initialState = {
  collections: {
    loading: false,
    error: false,
    items: false,
  },
  genres: {
    loading: false,
    error: false,
    items: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const browseGenreReducer = (state = initialState, action) =>
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

      case GENRES[REQUEST]:
        draft.genres.loading = true;
        break;

      case GENRES[SUCCESS]:
        draft.genres.loading = false;
        draft.genres.error = false;
        reduceGenres(action.response, draft);
        break;

      case GENRES[FAILURE]:
        draft.genres.loading = false;
        draft.genres.error = action.response;
        break;
    }
  });

export default browseGenreReducer;

function reduceCollections(response, draft) {
  draft.collections.items = response.map(({ title, data }) => ({
    title,
    data: data.results,
  }));
}

function reduceGenres({ genres }, draft) {
  draft.genres.items = genres;
}
