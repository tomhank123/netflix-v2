import { matchPath } from 'react-router';
import queryString from 'query-string';

const checkGenreType = (parentId, genreId, compareId) => {
  if (parentId) {
    return parentId === compareId;
  }

  return genreId === compareId;
};

export const getUrlParams = ({ pathname, search }) => {
  const match = matchPath(pathname, {
    path: '/browse/genre/:genreId',
    exact: true,
    strict: true,
  });

  let parentId = null;
  let genreId = null;

  if (search) {
    const { bc } = queryString.parse(search);
    parentId = +bc;
  }

  if (match) {
    genreId = +match.params.genreId;
  }

  return { genreId, parentId };
};

export const getGenreInfo = (parentId, genreId) => ({
  isMovies: checkGenreType(parentId, genreId, 34399),
  isSeries: checkGenreType(parentId, genreId, 83),
});
