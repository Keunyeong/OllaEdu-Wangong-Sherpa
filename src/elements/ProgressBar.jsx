import React from "react";
import styled from "styled-components";

const ProgressBar = ({ bg = "#EBA291", cg = "#F48065", score }) => {
  return (
    <Container>
      <Progress bg={bg}>
        <Circle cg={cg}>
          <Span fs="0.750em" ls="1.063em">
            80
          </Span>
          <Span fs="0.15em" ls="1.063em">
            %
          </Span>
        </Circle>
      </Progress>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 10.375em;
  height: 0.813em;
  background-color: #d8d8d8;
  border-radius: 0.375em;
`;

const Progress = styled.div`
  position: relative;
  width: 3em;
  height: 100%;
  background-color: ${props => props.bg};
  border-radius: 0.375em;
`;

const Circle = styled.div`
  position: absolute;
  right: -1.063em;
  top: -0.531em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.125em;
  height: 2.125em;
  background-color: ${props => props.cg};
  border-radius: 1.063em;
  color: white;
`;

const Span = styled.span`
  font-size: ${props => props.fs};
  line-height: ${props => props.ls};
  font-weight: 500;
`;
