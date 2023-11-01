class CharachterService {
  apiUrl = 'https://rickandmortyapi.com/api/character';

  callApi = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Sorry, try later`);
    }
    return await response.json();
  };

  searchCharacter = async (searchChar: string) => {
    const response = await this.callApi(`${this.apiUrl}?name=${searchChar}`);
    return response.results;
  };

  getAllCharacters = async () => {
    const response = await this.callApi(`${this.apiUrl}`);
    return response.results;
  };
}

export default CharachterService;
