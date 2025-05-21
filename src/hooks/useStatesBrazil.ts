import axios from "axios";

export const useCountriesApi = () => ({
  getStates: async () => {
    const response = await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
    return {
      states: response.data,
    };
  },
  getCities: async (UF: string) => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`);
    return {
      cities: response.data,
    };
  },
});