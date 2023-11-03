import { IValue } from '../types/interfaces';

export const defaultContext: IValue = {
  response: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
  error: '',
  fetchData: () => {},
};

export const convertUrltoCharId = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const convertCharIDtoUrl = (charID: number) => {
  return `https://swapi.dev/api/people/${charID}`;
};
