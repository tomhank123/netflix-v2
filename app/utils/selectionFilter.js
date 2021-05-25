export default function selectionFilter({ films } = []) {
  return [
    {
      title: 'Drama',
      data: films.filter((_, index) => index < 7),
    },
    {
      title: 'Thriller',
      data: films.filter((_, index) => index >= 7 && index < 14),
    },
    {
      title: 'Children',
      data: films.filter((_, index) => index >= 14 && index < 22),
    },
    {
      title: 'Suspense',
      data: films.filter((_, index) => index < 7),
    },
    {
      title: 'Romance',
      data: films.filter((_, index) => index >= 7 && index < 14),
    },
  ];
}
