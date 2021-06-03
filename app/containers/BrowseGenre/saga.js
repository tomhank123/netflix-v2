/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';
import { getGenreInfo } from './helpers';

export function* fetchCollecttions({ request: { genreId, parentId } }) {
  const { isMovies } = getGenreInfo(parentId, genreId);
  const type = isMovies ? 'movie' : 'tv';
  const getOriginals = `/${type}/popular?page=2`;
  const getContinueWatching = `/${type}/popular?page=3`;
  const getTrendingNow = `/${type}/popular?page=4`;
  const getPopular = `/${type}/popular?page=1`;
  const getUpcoming = `/${type}/popular?page=10`;
  const getTopRated = `/${type}/top_rated?page=2`;

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
  } catch ({ message }) {
    yield put(collections.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(COLLECTIONS[REQUEST], fetchCollecttions);
}

export default function* browseGenreSaga() {
  yield all([watchCollections()]);
}
