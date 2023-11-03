import axios from 'axios';
import { useEffect, useState } from 'react';

import { IApiResponse } from '../types/interfaces';

export const loadData = (param: string) => {
  const [response, setResponse] = useState<IApiResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'https://swapi.dev/api/people';

  const fetchData = async (url: string) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      setResponse(res.data);
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
