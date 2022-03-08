import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MonthlyReport from "../pages/MonthlyReport";
import Mypage from "../pages/Mypage";
import Login from "../pages/Login";
import Notice from "../pages/notice/Notice";

const ReportMain = () => {
  return (
    <Main>
      <Routes>
        <Route path="report/*" element={<MonthlyReport />} />
        <Route path="notice" element={<Notice />}>
          <Route path=":id" />
        </Route>
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
