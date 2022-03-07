import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};

export default App;
