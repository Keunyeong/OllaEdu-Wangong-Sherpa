import React from "react";
import styled from "styled-components";
import { ReportMain, Nav, Header } from "./constructors";

const App = () => {
  return (
    <APP>
      <Nav depart="police" />
      <MAIN>
        <Header></Header>
        <ReportMain />
      </MAIN>
    </APP>
  );
};

const APP = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const MAIN = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
