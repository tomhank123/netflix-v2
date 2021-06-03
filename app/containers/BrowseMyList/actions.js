/*
 *
 * BrowseMyList actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/BrowseMyList/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);
