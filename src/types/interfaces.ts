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

export interface AppState {
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
