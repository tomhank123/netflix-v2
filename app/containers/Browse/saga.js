/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all, call, put, delay } from 'redux-saga/effects';
import { COLLECTIONS, collections } from './actions';

export function* fetchCollecttions() {
  // const getOriginals = `/discover/movie?sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=28&with_keywords=moon`;
  const getTrendingNow = '/trending/all/day';
  const getPopular = '/movie/popular';
  const getUpcoming = '/movie/upcoming';
  const getTopTen = '/movie/now_playing';

  yield delay(2000);

  try {
    const [trendingNow, topTen, popular, upcoming] = yield all([
      call(request, 'get', getTrendingNow),
      call(request, 'get', getTopTen),
      call(request, 'get', getPopular),
      call(request, 'get', getUpcoming),
    ]);

    yield put(
      collections.success([
        {
          id: 'Trending Now',
          title: 'Trending Now',
          data: {
            ...trendingNow,
            results: trendingNow.results.filter(item =>
              ['movie', 'tv'].includes(item.media_type),
            ),
          },
        },
        {
          id: 'Top 10 in Vietnam Today',
          title: 'Top 10 in Vietnam Today',
          data: topTen,
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

export default function* browseSaga() {
  yield all([watchCollections()]);
}
