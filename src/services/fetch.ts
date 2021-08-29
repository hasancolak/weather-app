import useSWR, { SWRResponse } from "swr";
import fetcher from "../utils/fetcher";
import configData from "../config.json";

/**
 *(Function) FetchWeatherData is a function that returns the weather forecast data
 */
export const FetchWeatherData = (): SWRResponse<string, Error> => {
  const url: string = configData.API_PATH;

  const options = {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  };

  //SWR is a React Hooks library for data fetching //https://github.com/vercel/swr
  return useSWR(url, fetcher, options);
};
