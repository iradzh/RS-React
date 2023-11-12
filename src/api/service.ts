import { IApiResponse, ICharacter, IRouteParams } from '../types/interfaces';

export const loadListSimple = async (param: IRouteParams) => {
  let url = 'https://swapi.dev/api/people';

  const search = new URL(param.request.url).searchParams.get('search');
  const perPage = new URL(param.request.url).searchParams.get('perPage');

  if (param.params['page'] && search) {
    url = url.concat(`/?page=${param.params['page']}&search=${search}`);
  } else if (search) {
    url = url.concat(`/?search=${search}`);
  } else if (param.params['page']) {
    url = url.concat(`/?page=${param.params['page']}`);
  }

  const res = await fetch(url);

  const loadedData = {
    res: (await res.json()) as IApiResponse,
    perPage: perPage ? perPage : 10,
    search: search,
  };

  return loadedData;
};

export const loadCharacter = async (param: IRouteParams) => {
  const detailId = new URL(param.request.url).searchParams.get('detailId');

  if (detailId) {
    const res = await fetch(`https://swapi.dev/api/people/${detailId}`);
    return res.json() as Promise<ICharacter>;
  }

  return null;
};
