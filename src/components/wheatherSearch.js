import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as weatherActions from "../actions/WeatherActions";
import {
  optionsSelector,
  weatherSelector,
} from "../selectors/WeatherSelectors";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import moment from "moment";
import { useHistory } from "react-router-dom";
import BrightnessLowIcon from "@material-ui/icons/BrightnessLow";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import TimelineIcon from "@material-ui/icons/Timeline";
import "./styles.css";

const WeatherSearch = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const options = useSelector(optionsSelector);
  const weather = useSelector(weatherSelector);
  const [place, setPlace] = useState(null);

  const handlePlace = ({ target }) => {
    const { value } = target;
    dispatch(weatherActions.getSearchWeather({ search: value }));
  };

  const handleDetail = () => {
    dispatch(
      weatherActions.getWeatherDetail({ code: weather.current.condition.code })
    );
    history.push(`/${weather.current.condition.code}`);
  };

  const handleClick = (option) => {
    setPlace(option);
    dispatch(weatherActions.getWeather({ place: option.name }));
  };

  return (
    <>
      <div className="weather__search">
        <div className="search__header">
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.name}
            value={place}
            id="places"
            name="places"
            size="small"
            className="search__input"
            freeSolo
            autoComplete
            includeInputInList
            onChange={(event, newValue) => {
              handleClick(newValue);
            }}
            onSelect={(event) => handlePlace(event)}
            renderInput={(params) => (
              <TextField
                {...params}
                hint="koo, ndama nyonya"
                label="Search Place"
                variant="outlined"
                margin="normal"
              />
            )}
          />
        </div>
        {weather && (
          <div className="search__content" onClick={handleDetail}>
            <div className="content__header">
              <img src={weather.current.condition.icon} alt="icon" />
              <h3>{weather.current.condition.text} </h3>
              <p>{moment(weather.current.last_updated).format("LLLL")} </p>
              <h1>{weather.current.temp_c}º</h1>
            </div>
            <div className="content__header">
              <div className="content">
                <div className="item">
                  <BrightnessLowIcon className="item__icon" />
                  <div className="item__data">
                    <div>WIND</div>
                    <div>{weather.current.wind_degree} km/h</div>
                  </div>
                </div>
                <div className="item">
                  <WbIncandescentIcon className="item__icon" />
                  <div className="item__data">
                    <div>FEELS LIKES</div>
                    <div>{weather.current.feelslike_c}º</div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="item">
                  <WbSunnyIcon className="item__icon" />
                  <div className="item__data">
                    <div>INDEX UV</div>
                    <div>{weather.current.uv}</div>
                  </div>
                </div>
                <div className="item">
                  <TimelineIcon className="item__icon" />
                  <div className="item__data">
                    <div>PRESSURE</div>
                    <div>{weather.current.pressure_mb} mbar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default WeatherSearch;
