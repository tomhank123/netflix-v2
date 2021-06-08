/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import random from 'lodash/random';
import { billboard, BILLBOARD } from './actions';

export function* fetchBillboard() {
  // const requestUrl = '/movie/latest';
  const requestUrl = '/movie/now_playing';

  yield delay(2000);

  try {
    // const response = yield call(request, 'get', requestUrl);
    const { results } = yield call(request, 'get', requestUrl);

    yield put(billboard.success(results[random(0, 16)]));
  } catch ({ message }) {
    yield put(billboard.failure(message));
  }
}

export function* watchBillboard() {
  yield takeLatest(BILLBOARD[REQUEST], fetchBillboard);
}

export default function* herosSaga() {
  yield all([watchBillboard()]);
}
