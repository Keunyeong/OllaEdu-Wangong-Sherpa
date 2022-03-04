import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<MonthlyReport />} />
        <Route path="/mypage/*" element={<Mypage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.main`
  background-color: #f5f5f5;
  height: ${(917 / 982) * 100 + "vh"}; ;
`;

export default ReportMain;
