import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MonthlyReport from "../pages/MonthlyReport";

const ReportMain = () => {
  return (
    <Routes>
      <Route path="/" element={<MonthlyReport />} />
    </Routes>
  );
};

export default ReportMain;
