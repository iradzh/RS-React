import { Charachter } from './types/constants';

const url = 'https://swapi.dev/api/people/';
async function getData(): Promise<Charachter> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default getData;
