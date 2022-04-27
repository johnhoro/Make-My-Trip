import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./stylesheets/style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
