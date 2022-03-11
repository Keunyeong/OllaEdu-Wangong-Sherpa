import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Profile from "./mypage/Profile";

const Mypage = () => {
  const menuClick = e => {
    e.target.style.background = "#DFE0FF";
  };
  return (
    <Page>
      <Routes>
        <Route path="main" element={<Profile />} />
      </Routes>
    </Page>
  );
};

const Page = styled.div`
  background-color: #fff;
  border-radius: ${(50 / 1512) * 100 + "vw"};
  width: ${(1200 / 1512) * 100 + "vw"};
  padding: ${(40 / 1512) * 100 + "vw"};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12),
    0px 14px 64px -4px rgba(24, 39, 75, 0.12);
`;

export default Mypage;
