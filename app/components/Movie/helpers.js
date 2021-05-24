export const getPoster = posterPath => {
  if (!posterPath) return null;

  return `https://www.themoviedb.org/t/p/w440_and_h660_face${posterPath}`;
};

export const getBackdrop = backdropPath => {
  if (!backdropPath) return null;

  return `https://www.themoviedb.org/t/p/w440_and_h660_face${backdropPath}`;
};
