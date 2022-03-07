import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import Notice from "../pages/notice/Notice";
import NoticeLocation from "../pages/notice/NoticeLocation";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="report/*" element={<MonthlyReport />} />
        <Route path="notice" element={<Notice main="main" />} />
        <Route path="notice/:location" element={<NoticeLocation />} />
        <Route path="mypage/*" element={<Mypage />} />
      </Routes>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  height: ${(926 / 982) * 100 + "vh"};
`;

export default ReportMain;
