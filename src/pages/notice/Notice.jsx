import React from "react";
import { BrowserRouter, Route, Routes, NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import NoticeMenu from "./NoticeMenu";

const Div = styled.div`
width: ${(1200 / 1512) * 100 + "vw"};
  height: ${(782 / 982) * 100 + "vh"};
  margin: ${(60 / 982) * 100 + "vh"} ${(56 / 1512) * 100 + "vw"};
  
  border-radius: 20px;
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #FFFFFF;
  position: relative;
`;
const Section = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 83%;
  height: ${(782 / 982) * 100 + "vh"};
  border-radius: 0 20px 20px 0;
  border-left: 1px solid #D8D8D8;
  background-color: #F1F2F2;
`;

const Notice = ({main}) => {
  const params = useParams();
  console.log(main)
  return (
    <Div>
      <NoticeMenu />
      {main==="main"?<Section>공지사항</Section>:null}
    </Div>
    
  );
}
export default Notice;