export const convertUrltoCharId = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const convertCharIDtoUrl = (charID: number) => {
  return `https://swapi.dev/api/people/${charID}`;
};
