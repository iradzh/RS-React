export class MyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MyError';
  }
}

export interface result {
  name: string;
  birth_year: string;
}

export interface AppState {
  searchTerm: string;
  searchResults: result[];
  data: result | null;
}
