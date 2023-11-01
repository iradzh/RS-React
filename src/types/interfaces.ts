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
  id: number;
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  gender: string;
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
