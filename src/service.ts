import { result } from './types/constants';

const url = 'https://swapi.dev/api/people/';

async function getData(): Promise<result> {
  const response = await fetch(url);
  const data = await response.json();
  console.log('HERE', data);
  return data;
}

export default getData;
