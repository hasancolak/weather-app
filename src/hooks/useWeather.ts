import { useContext } from "react";
import IWeather from "../interface/weather.interface";
import { WeatherContext, WeatherGetSetT } from "../contexts/weather.context";

/**
 *(Function) this is the weather hook
 *(Return) [state, updateWeather]
 */
export function useWeather() {
  const [state, setState] = useContext(WeatherContext) as WeatherGetSetT;
  const updateWeather = (weather: IWeather) => {
    setState(weather);
  };

  return [state, updateWeather];
}
