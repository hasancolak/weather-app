/**
 *(Interface) this is interface of Api data
 */
export interface IApi {
  list: IApiList[];
  city: { name: string };
}

/**
 *(Interface) this is interface of Api weather data list
 */
export interface IApiList {
  dt: number;
  weather: { id: number; description: string }[];
  main: { temp: number };
}
