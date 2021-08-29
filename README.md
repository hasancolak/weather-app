# Weather App

A React weather app that displays weather information getting data from the OpenWeatherMap API

# Installation and Settup Instructions

In the project directory, you can run:

## Installation:

`npm install`

## To start a server:

`npm start`

## To visit the application:

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To test the application:

`npm test`

Added the some basic unit test. Launches the test runner in the interactive watch mode.

## To build the application:

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage:

You can scroll through the list by using Mouse Wheel

# Guideline

## Tech Stack

- React.js
- Typescript
- React Hooks
- Sass
- SWR

## API Reference

[https://samples.openweathermap.org](https://samples.openweathermap.org/data/2.5/forecast/?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22)

To get rid of CORS error, **Proxy** added for API Requests in Development.

```json
 ...
 "proxy": "https://samples.openweathermap.org",
 ...
```

# consideration and decision

## Design Principle and Code Quality

Advantage of separation of Concerns architecture implemententation:

- Lack of duplication and singularity of purpose of the individual components render the overall project easier to maintain.
- The application becomes more stable.
- to ensure that each component only concerns itself with a single set of cohesive responsibilities.
- The increase in maintainability and extensibility.
- The decoupling which results from requiring components to focus on a single purpose.

## State Management Preferences

There ara several option adding global state management to the React application such as redux, hooks.

I have decided to added State and Custom hooks to the applicationb because of below reason:

- We can create stateful function component.
- Hooks let us split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data),.
- Hooks allow us to reuse stateful logic without changing the component hierarchy
- Hooks let us use more of React’s features without classes

## Data Fetching

I have decided to integrate SWR which is a React Hooks library for data fetching. It covers in all aspects of speed, correctness, and stability to help us build better api call

Advantage of using SWR library:

- Fast, lightweight and reusable data fetching
- Transport and protocol agnostic
- Built-in cache and request deduplication
- Polling
- Pagination and scroll position recovery
- Built-in smart error retry
- TypeScript
- React Suspense

## Testing

TDD is one of the best practice of software development technique. In this project, I have just developed some basic tests integration.

On the other hand adding integration and e2e testing are also required practice of software development technique.

## Styling Preferences

I have implemented Sass stylesheet language to Control Scope With BEM Naming.

Advantage of using Sass with BEM library:

- It allow us to create reusable and non complex style codes.
- Sass suppots preprocessing, variable usage, nesting, partials, modules, mixin and more.

There is also other options for styling can be implemented like styled-components based on CSS-in-JS

## Responsive Design

The `@media` rule is used in media queries to apply different styles for different media types/devices. Media queries are useful to modify the site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width).

I simply added media rule to scale the application on some screen for `1680px`, `1340px`, `1080px` ,`580px` by considering both devices and application design
