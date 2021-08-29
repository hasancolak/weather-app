/**
 *(Interface) this is interface of weather
 */
export default interface IWeather {
  location?: string;
  dateTime: number;
  day: string;
  date: string;
  hour: string;
  description: string;
  icon_id: number;
  temperature: number;
  max_temp: number;
  min_temp: number;
  selected: boolean;
}
