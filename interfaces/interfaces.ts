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

export interface IApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

export interface IRootState {
  search: string;
  perPage: number;
  pageNum: number;
  isMainLoading: boolean;
  isDetailsLoading: boolean;
  isError: boolean;
}
