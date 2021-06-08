/*
 *
 * Billboard actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const BILLBOARD = createRequestTypes('app/Billboard/BILLBOARD');
export const billboard = createAsyncAction(BILLBOARD);
