import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as weatherActions from "../../actions/WeatherActions";
import { weatherDetailSelector } from "../../selectors/WeatherSelectors";
import "./detail.css";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const WheatherDetail = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const detail = useSelector(weatherDetailSelector);
  let { id } = useParams();

  useEffect(() => {
    dispatch(weatherActions.getWeatherDetail({ code: id }));
  }, [dispatch, id]);

  return (
    <div className="detail">
      <div className="detail__header">
        <ArrowBackIosIcon
          onClick={() => history.goBack()}
          className="back__icon"
        />
        <h4>{detail?.location.name}</h4>
      </div>
      <div className="detail__description">
        <h5> Next 7 days</h5>
      </div>
      <div className="detail__content">
        {detail?.forecast.forecastday.map((item, index) => (
          <div key={index} className="detail__item">
            <img src={item.day.condition.icon} alt="icon" />
            <div className="item__date">
              {moment(item.date).format("dddd")}
              {", "}
              {moment(item.date).format("MMM Do YY")}
            </div>
            <div className="item__temp">
              {item.day.avgtemp_c}º/{item.day.mintemp_c}º
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WheatherDetail;
