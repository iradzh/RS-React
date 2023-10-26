export class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyError';
  }
}

export interface CharachterProps {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  gender: string;
}

export interface AppState {
  searchTerm: string;
  searchResults: CharachterProps[];
  data: CharachterProps | null;
}
