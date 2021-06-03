/*
 *
 * Latest actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/Latest/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);
