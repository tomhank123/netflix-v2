/*
 *
 * Browse actions
 *
 */
import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const COLLECTIONS = createRequestTypes('app/Browse/COLLECTIONS');
export const collections = createAsyncAction(COLLECTIONS);

export const BILLBOARD = createRequestTypes('app/Browse/BILLBOARD');
export const billboard = createAsyncAction(BILLBOARD);
