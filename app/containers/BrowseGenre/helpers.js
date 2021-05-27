import { matchPath } from 'react-router';

export const getUrlParams = ({ pathname, search }) => {
  const match = matchPath(pathname, {
    path: '/browse/genre/:genreId',
    exact: true,
    strict: true,
  });

  let parentId = null;
  let genreId = null;

  if (search) {
    parentId = +search.replace('?bc=', '');
  }

  if (match) {
    genreId = +match.params.genreId;
  }

  return { genreId, parentId };
};
