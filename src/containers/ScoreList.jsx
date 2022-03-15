import React from "react";
import styled from "styled-components";
import { Tag, SubjectTypho } from "../elements";

const ScoreList = () => {
  return (
    <Container>
      <Tag />
      <InnerContainer>
        <SubjectTypho />
        <Border />
        <SubjectTypho />
        <Border />
        <SubjectTypho />
        <SubjectTypho />
        <Border />
        <SubjectTypho />
        <Border />
      </InnerContainer>
    </Container>
  );
};

export default ScoreList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33px 0 0 0;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  margin: 13px 0 0 0;
`;

const Border = styled.div`
  height: 76px;
  border-right: 1px solid #c8c8c8;
  margin: 0 24px;
`;
