/*
 *
 * Billboard reducer
 *
 */
import produce from 'immer';
import { FAILURE, REQUEST, SUCCESS } from 'utils/constants';
import { BILLBOARD } from './actions';

export const initialState = {
  billboard: {
    loading: false,
    error: false,
    item: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const billboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case BILLBOARD[REQUEST]:
        draft.billboard.loading = true;
        break;

      case BILLBOARD[SUCCESS]:
        draft.billboard.loading = false;
        draft.billboard.error = false;
        reduceBillboard(action.response, draft);
        break;

      case BILLBOARD[FAILURE]:
        draft.billboard.loading = false;
        draft.billboard.error = action.response;
        break;
    }
  });

export default billboardReducer;

function reduceBillboard(response, draft) {
  draft.billboard.item = response;
}
