import { ChangeEvent } from 'react';

export interface IAppState {
  searchChar: string;
  searchResults: ICharacter[];
  loading: boolean;
  charList: ICharacter[];
  charPerPage: number;
  currentPage: 1;
}

export interface ICharacter {
  id?: number;
  name?: string;
  birth_year?: string;
  eye_color?: string;
  skin_color?: string;
  gender?: string;
  url?: string;
}

export interface ICharacterProps {
  char: ICharacter;
  key: number;
}

export interface ICharacterListProps {
  characters: ICharacter[];
  loading: boolean;
}

export interface IErrBoundProps {
  children: React.ReactNode;
}

export interface IErrBoundState {
  hasError: boolean;
}

export interface ISearchBarProps {
  searchChar: string;
  onSearch: (searchChar: string) => void;
  onClear: () => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearchBarState {
  searchChar: string;
}

export interface IErrorTriggerProps {}

export interface IValue {
  response: IApiResponse;
  isLoading: boolean;
  error: string;
  fetchData: (url: string) => void;
}

export interface IApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

export interface ICharacterListProps {
  onItemClick: (name: string) => void;
  characters: ICharacter[];
  loading: boolean;
}
