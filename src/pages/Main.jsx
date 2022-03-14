import styled from "styled-components";
import { ReportMain, Nav, Footer } from "../constructors";

const Main = () => {
  return (
    <Page>
      <Nav depart="police" />
      <ReportMain />
      <Footer />
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default Main;
