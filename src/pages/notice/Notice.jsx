import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
  Outlet
} from "react-router-dom";
import styled from "styled-components";
import NoticeBoard from "./NoticeBoard";
import NoticeMenu from "./NoticeMenu";

const Main = styled.main`
width: ${(1200 / 1512) * 100 + "vw"};
  height: ${(782 / 982) * 100 + "vh"};
  margin: ${(60 / 982) * 100 + "vh"} ${(56 / 1512) * 100 + "vw"};
  
  border-radius: 20px;
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  position: relative;
`;
const Section = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 83%;
  height: ${(782 / 982) * 100 + "vh"};
  border-radius: 0 20px 20px 0;
  border-left: 1px solid #d8d8d8;
  background-color: #f1f2f2;
`;

const Notice = () => {
  const params = useParams();
  const [trues, setTrues] = useState(true);
  console.log(params.id)
  return (
    <Main>
      {params.id===undefined ? <NoticeMenu locate="home" bool={trues} /> : <NoticeMenu locate={params.id} /> }
      
      <Section>
      {params.id===undefined ? <NoticeBoard locate="home" /> : <NoticeBoard locate={params.id}/> }
      </Section>
    </Main>
  );
};
export default Notice;
