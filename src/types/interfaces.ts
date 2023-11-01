import { ChangeEvent } from 'react';

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  picUrl: string;
}

export interface ICharacterProps {
  char: ICharacter;
  key: number;
}

export interface ICharacterListProps {
  characters: ICharacter[];
  loading: boolean;
}

export interface IAppState {
  searchChar: string;
  searchResults: ICharacter[];
  loading: boolean;
  charList: ICharacter[];
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
