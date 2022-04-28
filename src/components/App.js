import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Flight from "./Flight";
import Header from "./Header";
import Booking from "./Booking";
import NotFound from "./NotFound";
import { Provider } from "react-redux";
import store from "../redux";

import ErrorBoundry from "./ErrorBoundry";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundry>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/flight">
              <Flight />
            </Route>
            <Route path="/booking">
              <Booking />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </ErrorBoundry>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
