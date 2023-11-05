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
  request: Request;
}

export const loadListSimple = async (param: RouteParams) => {
  console.log(param);
  let url = 'https://swapi.dev/api/people';

  const search = new URL(param.request.url).searchParams.get('search');

  if (param.params['page'] && search) {
    url = url.concat(`/?page=${param.params['page']}&search=${search}`);
  } else if (search) {
    url = url.concat(`/?search=${search}`);
  } else if (param.params['page']) {
    url = url.concat(`/?page=${param.params['page']}`);
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
