import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import { Notice } from "../pages/notice/Notice";
import Rating from "../pages/Rating";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="rating" element={<Rating />} />
        <Route path="report/*" element={<MonthlyReport />} />
        <Route path="notice/*" element={<Notice />} />
        <Route path="mypage/*" element={<Mypage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #f5f5f5;
  overflow: scroll;
  position: relative;
  height: 100%;
  padding-bottom: 300px;
`;

export default ReportMain;
