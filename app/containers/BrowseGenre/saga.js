/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections, GENRES, genres } from './actions';
import { getGenreInfo } from './helpers';

export function* fetchCollecttions({ request: { genreId, parentId } }) {
  const { isMovies } = getGenreInfo(parentId, genreId);
  const type = isMovies ? 'movie' : 'tv';
  const getTrendingNow = `/trending/${type}/day`;
  const getPopular = `/${type}/popular`;
  const getTopTen = isMovies ? `/${type}/now_playing` : `/${type}/airing_today`;

  yield delay(2000);

  try {
    const [trendingNow, popular, topRated] = yield all([
      call(request, 'get', getTrendingNow),
      call(request, 'get', getPopular),
      call(request, 'get', getTopTen),
    ]);

    yield put(
      collections.success([
        {
          id: 'Trending Now',
          title: 'Trending Now',
          data: trendingNow,
        },
        {
          id: 'Popular on Netflix',
          title: 'Popular on Netflix',
          data: popular,
        },
        {
          id: 'Top 10 in Vietnam Today',
          title: 'Top 10 in Vietnam Today',
          data: {
            ...topRated,
            results: topRated.results.filter((_, index) => index < 10),
          },
        },
      ]),
    );
  } catch ({ message }) {
    yield put(collections.failure(message));
  }
}

export function* fetchGenres({ request: { genreId, parentId } }) {
  const { isMovies } = getGenreInfo(parentId, genreId);
  const type = isMovies ? 'movie' : 'tv';
  const requestURL = `/genre/${type}/list`;

  yield delay(2000);

  try {
    const responses = yield call(request, 'get', requestURL);

    yield put(genres.success(responses));
  } catch ({ message }) {
    yield put(genres.failure(message));
  }
}

export function* watchCollections() {
  yield takeLatest(COLLECTIONS[REQUEST], fetchCollecttions);
}

export function* watchGenres() {
  yield takeLatest(GENRES[REQUEST], fetchGenres);
}

export default function* browseGenreSaga() {
  yield all([watchCollections(), watchGenres()]);
}
