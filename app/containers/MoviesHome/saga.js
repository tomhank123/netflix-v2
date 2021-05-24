/* eslint-disable no-console */
import request from 'utils/request';
import { REQUEST } from 'utils/constants';
import { takeLatest, all } from 'redux-saga/effects';
import { createAsyncActionCreator } from 'utils/reduxHelpers';
import * as actions from './actions';

export function* fetchPopularMovies() {
  const requestURL = `/movie/popular?page=1`;
  yield createAsyncActionCreator(
    request,
    'get',
    requestURL,
    actions.popularMovies,
  );
}

export function* watchPopularMovies() {
  yield takeLatest(actions.POPULAR_MOVIES[REQUEST], fetchPopularMovies);
}

// Individual exports for testing
export default function* moviesHomeSaga() {
  yield all([watchPopularMovies()]);
}
