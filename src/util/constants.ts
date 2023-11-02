import { IValue } from '../types/interfaces';

export const defaultContext: IValue = {
  response: [],
  isLoading: false,
  error: '',
  fetchData: () => {},
};
