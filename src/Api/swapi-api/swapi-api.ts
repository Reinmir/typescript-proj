import axios from "axios";

export class SwapiApi {
  static baseUrl = "https://swapi.dev/api";

  static async getPerson(id: number) {
    const { data } = await axios.get(`${SwapiApi.baseUrl}/people/${id}/`);
    return data;
  }

  static async getPeople() {
    const { data } = await axios.get(`${SwapiApi.baseUrl}/people`);

    return data;
  }
}
