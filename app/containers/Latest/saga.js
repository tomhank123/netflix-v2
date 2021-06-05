/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';

export function* fetchCollecttions() {
  const getLatestSeries = `/tv/popular?page=2`;
  const getLatestMovie = `/movie/popular?page=2`;
  const getTrendingNow = '/trending/all/day';
  const getWorthTheWait = `/trending/all/week?page=2`;
  const getUpcomingDay = '/tv/airing_today';
  const getUpcomingWeek = '/tv/on_the_air';

  yield delay(2000);

  try {
    const [
      latestSeries,
      trendingNow,
      latestMovies,
      worthTheWait,
      upcomingDay,
      upcomingWeek,
    ] = yield all([
      call(request, 'get', getLatestSeries),
      call(request, 'get', getTrendingNow),
      call(request, 'get', getLatestMovie),
      call(request, 'get', getWorthTheWait),
      call(request, 'get', getUpcomingDay),
      call(request, 'get', getUpcomingWeek),
    ]);

    yield put(
      collections.success([
        {
          id: 'New TV Shows',
          title: 'New TV Shows',
          data: latestSeries,
        },
        {
          id: 'Top 10 in Vietnam Today',
          title: 'Top 10 in Vietnam Today',
          data: {
            ...trendingNow,
            results: trendingNow.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
        {
          id: 'New Movies',
          title: 'New Movies',
          data: latestMovies,
        },
        {
          id: 'Worth the Wait',
          title: 'Worth the Wait',
          data: {
            ...worthTheWait,
            results: worthTheWait.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
        {
          id: 'Coming This Week',
          title: 'Coming This Week',
          data: upcomingDay,
        },
        {
          id: 'Coming Next Week',
          title: 'Coming Next Week',
          data: upcomingWeek,
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
