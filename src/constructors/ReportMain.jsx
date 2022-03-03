import React from "react";
import { Routes, Route } from "react-router-dom";
import MonthlyReport from "../pages/MonthlyReport";
import Notice from "../pages/notice/Notice";

const ReportMain = () => {
  return (
    <Routes>
      <Route path='/notice' element={<Notice />} />
      <Route path='/' element={<MonthlyReport />} />
    </Routes>
  );
};

export default ReportMain;
