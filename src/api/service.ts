import axios from 'axios';
import { useEffect, useState } from 'react';

import { ICharacter } from '../types/interfaces';

export const loadData = (param: string) => {
  const [response, setRespones] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://swapi.dev/api/people';

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setRespones(res.data.results);
      setIsLoading(false);
    } catch (err) {
      setError(err as string);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url: string) => fetchData(url),
  };
};
