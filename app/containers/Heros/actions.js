/*
 *
 * Heros actions
 *
 */

import { createAsyncAction, createRequestTypes } from 'utils/reduxHelpers';

export const BILLBOARD = createRequestTypes('app/Heros/BILLBOARD');
export const billboard = createAsyncAction(BILLBOARD);
