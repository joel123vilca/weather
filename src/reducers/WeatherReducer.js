import { createReducer } from "@reduxjs/toolkit";

import * as weatherActions from ".././actions/WeatherActions";

const initialState = {
  weatherDetail: null,
  options: [],
  weather: null,
};

const WeatherReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(weatherActions.setWeatherDetail, (state, { payload }) => ({
      ...state,
      weatherDetail: payload,
    }))
    .addCase(weatherActions.setWeather, (state, { payload }) => ({
      ...state,
      weather: payload,
    }))
    .addCase(weatherActions.setOptions, (state, { payload }) => ({
      ...state,
      options: payload,
    }));
});

export default WeatherReducer;
