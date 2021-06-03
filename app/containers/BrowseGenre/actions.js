/*
 *
 * BrowseGenre actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/BrowseGenre/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);
