import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Profile from "./mypage/Profile";
import Schedule from "./mypage/Schedule";

const Mypage = () => {
  const menuClick = e => {
    e.target.style.background = "#DFE0FF";
  };
  return (
    <Page>
      <Routes>
        <Route path="main" element={<Profile />} />
        <Route path="schedule" element={<Schedule />} />
      </Routes>
    </Page>
  );
};

const Page = styled.div`
  border-radius: ${(50 / 1512) * 100 + "vw"};
  width: ${(1200 / 1512) * 100 + "vw"};
  padding: 0 ${(40 / 1512) * 100 + "vw"};
  display: flex;
  flex-direction: column;
`;

export default Mypage;
