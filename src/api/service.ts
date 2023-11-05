import axios from 'axios';
import { useEffect, useState } from 'react';
import { Params } from 'react-router-dom';

import { IApiResponse, ICharacter } from '../types/interfaces';

export const loadList = (param: string) => {
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
      console.log(url);
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

interface RouteParams {
  params: Params;
}

export const loadListSimple = async (param: RouteParams) => {
  let url = '';
  if (param.params['page']) {
    url = 'https://swapi.dev/api/people/?page=' + param.params['page'];
  } else {
    url = 'https://swapi.dev/api/people';
  }

  const res = await fetch(url);

  return res.json() as Promise<IApiResponse>;
};

export const loadCharacter = async (param: RouteParams) => {
  const res = await fetch(
    `https://swapi.dev/api/people/${param.params['charID']}`
  );

  return res.json() as Promise<ICharacter>;
};
