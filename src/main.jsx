import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
