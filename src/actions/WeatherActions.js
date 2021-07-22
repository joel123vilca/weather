import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import WeatherController from "../controllers/WeatherController";

export const types = {
  SEARCH_COUNTRY: "SEARCH_COUNTRY",
  SET_OPTIONS: "SET_OPTIONS",
  GET_WEATHER: "GET_WEATHER",
  SET_WEATHER: "SET_WEATHER",
  GET_WEATHER_DETAIL: "GET_WEATHER_DETAIL",
  SET_WEATHER_DETAIL: "SET_WEATHER_DETAIL",
};

export const getWeatherDetail = createAsyncThunk(
  types.GET_WEATHER_DETAIL,
  async ({ code }, { dispatch }) => {
    const response = await WeatherController.getWeatherDetail(code);
    dispatch(setWeatherDetail(response));
    return response;
  }
);

export const getSearchWeather = createAsyncThunk(
  types.SEARCH_COUNTRY,
  async ({ search }, { dispatch }) => {
    const response = await WeatherController.getSearchWeather(search);
    dispatch(setOptions(response));
    return response;
  }
);

export const getWeather = createAsyncThunk(
  types.GET_WEATHER,
  async ({ place }, { dispatch }) => {
    const response = await WeatherController.getWeather(place);
    dispatch(setWeather(response));
    return response;
  }
);

export const setWeatherDetail = createAction(
  types.SET_WEATHER_DETAIL,
  (detail) => ({
    payload: detail,
  })
);
export const setWeather = createAction(types.SET_WEATHER, (weather) => ({
  payload: weather,
}));

export const setOptions = createAction(types.SET_OPTIONS, (options) => ({
  payload: options,
}));
