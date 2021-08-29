import { FetchWeatherData } from "../services/fetch";
import { toCelcius } from "../utils/conversion";
import { getDate, getDay, getHour } from "../utils/date";
import IWeather from "../interface/weather.interface";
import { IApi } from "../interface/api.interface";
import { useState } from "react";
import { getMaxTemp, getMinTemp } from "../utils/helper";

/**
 *(Function) this is the custom forecast hook
 *(Return) forecast, isLoading: !forecast && !isError, isError, updateForecast
 */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useForecast = () => {
  const emptyForecast: IWeather[] = [];
  const [forecast, setForecast] = useState(emptyForecast);
  const { data, error } = FetchWeatherData();

  const updateForecast = (weather: IWeather) => {
    setForecast(
      forecast.map((item, index) => {
        if (item.selected) {
          item.selected = false;
        }

        if (index === 0) {
          item.selected = true;
        }
        if (weather.dateTime === item.dateTime) {
          forecast[0].selected = false;
          item.selected = true;
        }

        return item;
      })
    );
  };
  let isError = false;

  if (forecast == null || forecast.length === 0) {
    isError = error as unknown as boolean;

    if (data != null) {
      setForecast(mapper(data as unknown as IApi));
    }
  }

  return {
    forecast,
    isLoading: !forecast && !isError,
    isError,
    updateForecast,
  };
};

function mapper(data: IApi): IWeather[] {
  const max_temp = getMaxTemp(data.list);
  const min_temp = getMinTemp(data.list);

  return data.list.map(
    (item: {
      dt: number;
      weather: { id: number; description: string }[];
      main: { temp: number };
    }) => ({
      location: data.city.name,
      dateTime: item.dt,
      day: getDay(item.dt),
      date: getDate(item.dt),
      hour: getHour(item.dt),
      description: item.weather[0].description,
      icon_id: item.weather[0].id,
      temperature: toCelcius(item.main.temp),
      max_temp: toCelcius(max_temp),
      min_temp: toCelcius(min_temp),
      selected: false,
    })
  );
}
