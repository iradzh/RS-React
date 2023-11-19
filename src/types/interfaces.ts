import { Params } from 'react-router-dom';

export interface ICharacter {
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  gender: string;
  height: string;
  mass: string;
  hair_color: string;
  url: string;
}

export interface IErrBoundProps {
  children?: React.ReactNode;
}

export interface IErrBoundState {
  hasError: boolean;
}

export interface IErrorTriggerProps {}

export interface IApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

export interface ICharacterListProps {
  loadedData: ILoadedData;
  page: number;
}

export interface IRouteParams {
  params: Params;
  request: Request;
}

export interface ILoadedData {
  res: IApiResponse;
  perPage: number;
  search?: string;
}

export interface IRootState {
  search: string;
  perPage: number;
  pageNum: number;
  isMainLoading: boolean;
  isDetailsLoading: boolean;
  isError: boolean;
}

export interface IActionBool {
  payload: boolean;
  type: string;
}
