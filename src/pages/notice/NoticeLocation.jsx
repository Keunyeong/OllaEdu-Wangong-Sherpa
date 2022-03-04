import { useParams } from "react-router-dom";
import NoticeMenu from "./NoticeMenu";
import styled from "styled-components";
const Main = styled.main`
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
export default function NoticeLocation() {
  const params = useParams();
  console.log(params)
  return (
    <Main>
      <NoticeMenu locate={params.location} />
      <Section>{params.location}</Section>
    </Main>
  );
}