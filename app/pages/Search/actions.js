/*
 *
 * BrowseMyList actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/Search/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);

export const KEYWORDS = createRequestTypes('app/Search/KEYWORDS');
export const keywords = createAsyncAction(KEYWORDS);
