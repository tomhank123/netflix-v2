const checkGenreType = (parentId, genreId, compareId) => {
  if (parentId) {
    return parentId === compareId;
  }

  return genreId === compareId;
};

export const getGenreInfo = (parentId, genreId) => ({
  isMovies: checkGenreType(parentId, genreId, 34399),
  isSeries: checkGenreType(parentId, genreId, 83),
});
