import styled from "styled-components";
import { ReportMain, Nav, Header } from "../constructors";
import { ContextProvider } from "../context/Context";

const Main = () => {
  return (
    <Page>
      <Nav depart="police" />

      <ContextProvider>
        <ReportMain />
      </ContextProvider>
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
