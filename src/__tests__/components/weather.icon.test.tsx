import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import WeatherIcon from "../../components/icon/weather.icon";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders weather sun svg icon", async () => {
  act(() => {
    render(<WeatherIcon code={800} />, container);
  });

  expect(container.textContent).toBe("weather-sun.svg");
});

it("renders weather cloud svg icon", async () => {
  act(() => {
    render(<WeatherIcon code={801} />, container);
  });

  expect(container.textContent).toBe("weather-cloud.svg");
});
