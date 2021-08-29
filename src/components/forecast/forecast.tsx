import "./forecast.scss";
import React from "react";
import { useWeather } from "../../hooks/useWeather";
import { useForecast } from "../../hooks/useForecast";
import IWeather from "../../interface/weather.interface";
import WeatherIcon from "../icon/weather.icon";
import Loading from "../icon/loading.icon";

/*
 * (Component) Forecast is a component that renders the forecast card
 */
const Forecast = (): JSX.Element => {
  const [, updateWeather] = useWeather();
  const { forecast, isLoading, isError, updateForecast } = useForecast();
  const setWeather = (item: IWeather) => {
    (updateWeather as (weather: IWeather) => {})(item);
    updateForecast(item);
  };

  if (
    forecast != null &&
    forecast.length > 0 &&
    forecast.every((item: IWeather) => !item.selected)
  ) {
    setWeather(forecast[0]);
  }

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <>
      {forecast.map(function (item: IWeather, index: number) {
        return (
          <div
            className="scroll__item"
            role="listitem"
            key={`scroll-item-${index}`}
            is-active={item.selected.toString()}
            onClick={() => setWeather(item)}
          >
            <div className="sml-text">{item.hour}</div>
            <div className="icon">
              <WeatherIcon code={item.icon_id} />
            </div>
            <div className="medium-text">{item.temperature}&deg;</div>
          </div>
        );
      })}
    </>
  );
};

export default Forecast;
