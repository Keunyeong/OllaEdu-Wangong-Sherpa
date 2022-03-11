import styled from "styled-components";
import { ReportMain, Nav, Header } from "../constructors";

const Main = () => {
  return (
    <Page>
      <Nav depart="police" />
      <ReportMain />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Main;
