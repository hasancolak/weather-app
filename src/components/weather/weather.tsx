import "./weather.scss";
import { useWeather } from "../../hooks/useWeather";
import IWeather from "../../interface/weather.interface";
import WeatherIcon from "../icon/weather.icon";

/**
 *(Function) that returns the weather card by selecting from weather forecast list
 */
const Weather = () => {
  const weather = useWeather()[0] as IWeather;

  return (
    <>
      <div className="card-container card-root">
        <div className="card-container__col-3 icon">
          <WeatherIcon code={weather.icon_id} />
        </div>

        <div className="card-container__col-3">
          <div className="card-container">
            <div className="card-container__col-2 sml-text">
              {weather!.description}
            </div>
            <div className="card-container__col-2 sml-text">
              {weather.max_temp}&deg; / {weather.min_temp}&deg;
            </div>
          </div>
          <div className="card-container big-text">
            {weather.temperature}&deg;
          </div>
        </div>

        <div className="card-container__col-3">
          <div className="card-container sml-text">{weather.location}</div>
          <div className="card-container medium-text">{weather.day}</div>
          <div className="card-container medium-text">{weather.date}</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
