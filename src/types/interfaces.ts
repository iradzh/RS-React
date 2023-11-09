import { ReactNode } from 'react';
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
  children: React.ReactNode;
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

export interface IAppContextProviderProps {
  children: ReactNode;
}
export interface IAppContext {
  search: string;
  updateSearch: (newSearch: string) => void;
  charList: ICharacter[];
  updateCharList: (loadedData: ILoadedData) => void;
  response: IApiResponse;
  updateResponse: (loadedData: ILoadedData) => void;
  perPage: number;
  updatePerPage: (newPerPage: number) => void;
  pageNum: number;
  updatePageNum: (newPageNum: number) => void;
}
