/*
 *
 * BrowseGenre actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/BrowseGenre/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);

export const GENRES = createRequestTypes('app/BrowseGenre/GENRES');
export const genres = createAsyncAction(GENRES);
