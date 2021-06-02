/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';

export function* fetchCollecttions() {
  const getOriginals = `/movie/popular?page=2`;
  const getContinueWatching = `/movie/popular?page=3`;
  const getTrendingNow = `/movie/popular?page=4`;
  const getPopular = `/movie/popular?page=1`;
  const getUpcoming = `/movie/upcoming?page=2`;
  const getTopRated = `/movie/top_rated?page=2`;

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
          id: 'Netflix Originals',
          title: 'Netflix Originals',
          data: originals,
        },
        {
          id: 'Continue Watching for Me',
          title: 'Continue Watching for Me',
          data: continueWatching,
        },
        {
          id: 'Trending Now',
          title: 'Trending Now',
          data: trendingNow,
        },
        {
          id: 'Top 10 in Vietnam Today',
          title: 'Top 10 in Vietnam Today',
          data: topRated,
        },
        {
          id: 'Popular on Netflix',
          title: 'Popular on Netflix',
          data: popular,
        },
        {
          id: 'Upcoming',
          title: 'Upcoming',
          data: upcoming,
        },
      ]),
    );
  } catch (err) {
    yield put(collections.failure(err));
  }
}

export function* watchCollections() {
  yield takeLatest(COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* browseSaga() {
  yield all([watchCollections()]);
}
