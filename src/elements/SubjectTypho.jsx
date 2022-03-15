import React from "react";
import styled from "styled-components";

const SubjectTypho = () => {
  return (
    <Container>
      <Title>소방관계법규</Title>
      <Score>87</Score>점
    </Container>
  );
};

export default SubjectTypho;

const Container = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 107px;
  height: 101px;
  color: black;
  text-align: center;
  padding: 13px 0 19px 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #58a2eb;
  margin-bottom: 13px;
`;

const Score = styled.span`
  display: inline-block;
  font-size: 36px;
  font-weight: 700;
`;
