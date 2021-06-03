/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';

export function* fetchCollecttions() {
  const getOriginals = `/movie/popular?page=2`;
  const getContinueWatching = `/movie/popular?page=3`;
  const getTrendingNow = `/movie/popular?page=4`;
  const getPopular = `/movie/popular?page=1`;
  const getUpcoming = `/movie/upcoming?page=2`;
  const getTopRated = `/movie/top_rated?page=2`;

  yield delay(2000);

  try {
    const [
      originals,
      continueWatching,
      trendingNow,
      topRated,
      popular,
      upcoming,
    ] = yield all([
      call(request, 'get', getOriginals),
      call(request, 'get', getContinueWatching),
      call(request, 'get', getTrendingNow),
      call(request, 'get', getTopRated),
      call(request, 'get', getPopular),
      call(request, 'get', getUpcoming),
    ]);

    yield put(
      collections.success([
        {
          id: 'New TV Shows',
          title: 'New TV Shows',
          data: originals,
        },
        {
          id: 'Top 10 in Vietnam Today',
          title: 'Top 10 in Vietnam Today',
          data: continueWatching,
        },
        {
          id: 'New Movies',
          title: 'New Movies',
          data: trendingNow,
        },
        {
          id: 'Worth the Wait',
          title: 'Worth the Wait',
          data: topRated,
        },
        {
          id: 'Coming This Week',
          title: 'Coming This Week',
          data: popular,
        },
        {
          id: 'Coming Next Week',
          title: 'Coming Next Week',
          data: upcoming,
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

export default function* latestSaga() {
  yield all([watchCollections()]);
}
