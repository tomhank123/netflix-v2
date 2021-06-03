/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections, KEYWORDS, keywords } from './actions';

export function* fetchCollecttions({ request: query }) {
  const getMovies = `/search/movie?query=${query}&page=1`;

  yield delay(2000);

  try {
    const [results] = yield all([call(request, 'get', getMovies)]);

    yield put(
      collections.success([
        {
          id: null,
          title: null,
          data: results,
        },
      ]),
    );
  } catch ({ message }) {
    yield put(collections.failure(message));
  }
}

export function* fetchKeywords({ request: query }) {
  const requestUrl = `/search/keyword?query=${query}&page=1`;

  yield delay(2000);

  try {
    const results = yield call(request, 'get', requestUrl);

    yield put(keywords.success(results));
  } catch ({ message }) {
    yield put(keywords.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(COLLECTIONS[REQUEST], fetchCollecttions);
}

export function* watchKeywords() {
  yield takeLatest(KEYWORDS[REQUEST], fetchKeywords);
}

export default function* searchSaga() {
  yield all([watchCollections(), watchKeywords()]);
}
