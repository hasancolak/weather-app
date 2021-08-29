import React from "react";
import { ReactComponent as CloudIcon } from "../../assets/icons/weather-cloud.svg";
import { ReactComponent as SunIcon } from "../../assets/icons/weather-sun.svg";

interface IWeatherIconProps {
  code: number;
}

/**
 *(Function) that returns the weather icon using React Fucntion Component interface
 *(Param: number) this is the weather icon code
 */
const WeatherIcon: React.FC<IWeatherIconProps> = (props) => {
  let Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  switch (props.code) {
    case 801:
      //cloudy weather icon
      Icon = CloudIcon;
      break;
    default:
      //sunny weather icon
      Icon = SunIcon;
  }

  return <Icon />;
};

export default WeatherIcon;
