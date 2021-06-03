/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';

export function* fetchCollecttions() {
  const getPopular = `/movie/popular?page=1`;

  yield delay(2000);

  try {
    const [popular] = yield all([call(request, 'get', getPopular)]);

    yield put(
      collections.success([
        {
          id: 'My List',
          title: 'My List',
          data: popular,
        },
      ]),
    );
  } catch ({ message }) {
    yield put(collections.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* myListSaga() {
  yield all([watchCollections()]);
}
