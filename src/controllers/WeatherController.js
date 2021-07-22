import client from "./HttpClient";
const API_KEY = "c10f3fa865d44b25847202701211907";
class WeatherController {
  static async getSearchWeather(search) {
    try {
      const response = await client.get(
        `search.json?key=${API_KEY}&q=${search}`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
  static async getWeather(place) {
    try {
      const response = await client.get(
        `current.json?key=${API_KEY}&q=${place}&aqi=yes`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
  static async getWeatherDetail(code) {
    try {
      const response = await client.get(
        `forecast.json?key=${API_KEY}&q=${code}&days=7`
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default WeatherController;
