import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import WeatherSearch from "./components/wheatherSearch";
import WeatherDetail from "./components/Detail/WheaterDetail";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={WeatherSearch} exact />
            <Route path="/:id" component={WeatherDetail} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
