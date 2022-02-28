import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ReportMain } from "./constructors";

const App = () => {
  return (
    <BrowserRouter>
      <ReportMain />
    </BrowserRouter>
  );
};

export default App;
