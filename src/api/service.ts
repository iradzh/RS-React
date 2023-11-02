import axios from 'axios';
import { useEffect, useState } from 'react';

import { ICharacter } from '../types/interfaces';

export const loadData = (param: string, perPage: number) => {
  const [response, setResponse] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://swapi.dev/api/people';

  const fetchData = async (url: string, perPage: number) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data.results.slice(0, perPage));
      setIsLoading(false);
    } catch (err) {
      setError(err as string);
    }
  };

  useEffect(() => {
    fetchData(param, perPage);
  }, [param, perPage]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string, perPage: number) => fetchData(url, perPage),
  };
};
