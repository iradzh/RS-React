class CharachterService {
  apiUrl = "https://swapi.dev/api/people/";

  callApi = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Sorry, try later`);
    }
    return await response.json();
  };

  searchCharacter = async (searchChar: string) => {
    const response = await this.callApi(`${this.apiUrl}?search=${searchChar}`);
    return response.results;
  };

  getAllCharacters = async () => {
    const response = await this.callApi(`${this.apiUrl}`);
    return response.results;
  };
}

export default CharachterService;
