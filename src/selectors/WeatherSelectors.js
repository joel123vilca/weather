import { createSelector } from "@reduxjs/toolkit";

export const weatherStateSelector = createSelector(
  (state) => state.weather,
  (weather) => weather
);

export const weatherDetailSelector = createSelector(
  weatherStateSelector,
  (state) => state.weatherDetail
);

export const optionsSelector = createSelector(
  weatherStateSelector,
  (state) => state.options
);

export const weatherSelector = createSelector(
  weatherStateSelector,
  (state) => state.weather
);
