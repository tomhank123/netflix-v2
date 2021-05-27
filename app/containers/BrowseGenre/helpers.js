import { matchPath } from 'react-router';

export const getGenreId = location => {
  const match = matchPath(location.pathname, {
    path: '/browse/genre/:genreId',
    exact: true,
    strict: true,
  });

  return match ? +match.params.genreId : null;
};
