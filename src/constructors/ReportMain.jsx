import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import { Notice } from "../pages/notice/Notice";
import Light from "../elements/Light";
import MainFooter from "../elements/MainFooter";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="report/*" element={<MonthlyReport />} />
        <Route path="notice/*" element={<Notice />} />
        <Route path="mypage/*" element={<Mypage />} />
      </Routes>
      <MainFooter />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
`;

export default ReportMain;
