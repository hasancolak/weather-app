import "./assets/styles/app.scss";
import { useState } from "react";
import React from "react";
import Weather from "./components/weather/weather";
import Scroll from "./components/scroll/scroll";
import { emptyWeather, WeatherContext } from "./contexts/weather.context";

function App(): JSX.Element {
  return (
    <WeatherContext.Provider value={useState(emptyWeather)}>
      <div className="App">
        <Weather />
        <Scroll />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
