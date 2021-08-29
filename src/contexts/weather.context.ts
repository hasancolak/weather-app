import { createContext } from "react";
import IWeather from "../interface/weather.interface";

/**
 * (Object) Empty weather with default values
 */
export const emptyWeather: IWeather = {
  location: undefined,
  dateTime: 0,
  day: "",
  date: "",
  hour: "",
  description: "",
  icon_id: 0,
  temperature: 0,
  max_temp: 0,
  min_temp: 0,
  selected: false,
};

export type WeatherGetSetT = [
  IWeather,
  React.Dispatch<React.SetStateAction<IWeather>>
];

/**
 * Weather context to be shared by the components
 */
export const WeatherContext = createContext<WeatherGetSetT | undefined>(
  undefined
);
