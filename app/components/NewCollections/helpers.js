export const getCollections = (collections = []) => {
  const billboard = collections.find(({ type }) => type === 'billboard');
  const filteredColls = collections.filter(({ type }) => type !== 'billboard');

  return [billboard, filteredColls];
};
