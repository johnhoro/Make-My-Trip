import React, { useEffect } from "react";
import Home from "./Home/Home";
import { Route, Switch } from "react-router-dom";
import Flight from "./FlightDetails/Flight";
import Header from "./common/Header";
import Booking from "./Booking/Booking";
import { useDispatch } from "react-redux";
import ErrorBoundry from "./ErrorBoundry";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const ls = localStorage.getItem("flightInfo");
    if (ls) {
      dispatch({
        type: "updateState",
        payload: JSON.parse(ls),
      });
    }
  }, []);

  return (
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
      </Switch>
    </ErrorBoundry>
  );
}

export default App;
