export class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyError';
  }
}

export interface Charachter {
  name: string;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  gender: string;
}

export interface AppState {
  searchTerm: string;
  searchResults: Charachter[];
  data: Charachter | null;
}
