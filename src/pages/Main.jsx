import styled from "styled-components";
import { ReportMain, Nav, Header } from "../constructors";
import { ContextProvider } from "../context/Context";

const Main = () => {
  return (
    <Page>
      <Nav depart="police" />
      <Body>
        <Header></Header>
        <ContextProvider>
          <ReportMain />
        </ContextProvider>
      </Body>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
