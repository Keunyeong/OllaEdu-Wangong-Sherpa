import React from "react";
import styled from "styled-components";
import { ProgressBar } from "../elements";
const RankList = () => {
  return (
    <Container>
      <TitleConatiner>
        <TyphoGraphy fs="12px" fw={700}>
          총점
        </TyphoGraphy>
        <Absolute>
          <ProgressBar bg="rgba(100, 100, 165, 0.8)" cg="#6464A5" />
        </Absolute>
        <TyphoGraphy fs="12px" fw={700}>
          6등
          <TyphoGraphy fs="10px" fw={300}>
            /87명
          </TyphoGraphy>
        </TyphoGraphy>
      </TitleConatiner>
      <Ul>
        <Li>
          <TyphoGraphy fs="12px" fw={300}>
            과목명
          </TyphoGraphy>
          <Absolute>
            <ProgressBar />
          </Absolute>
          <TyphoGraphy fs="12px" fw={700}>
            6등
            <TyphoGraphy fs="10px" fw={300}>
              /87명
            </TyphoGraphy>
          </TyphoGraphy>
        </Li>
        <Li>
          <TyphoGraphy fs="12px" fw={300}>
            과목명
          </TyphoGraphy>
          <Absolute>
            <ProgressBar />
          </Absolute>
          <TyphoGraphy fs="12px" fw={700}>
            6등
            <TyphoGraphy fs="10px" fw={300}>
              /87명
            </TyphoGraphy>
          </TyphoGraphy>
        </Li>
      </Ul>
    </Container>
  );
};

export default RankList;

const Container = styled.section`
  width: 15.813em;
  height: 12em;
  margin: 8px 0 0 0;
`;

const TitleConatiner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #d8d8d8;
  padding-bottom: 10px;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;

const Absolute = styled.div`
  position: absolute;
  right: 58px;
  display: flex;
  align-items: center;
`;

const TyphoGraphy = styled.span`
  font-size: ${props => props.fs};
  font-weight: ${props => props.fw};
  margin: ${props => props.margin};
`;

const Ul = styled.ul``;

const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;

  & + & {
    margin-top: 20px;
  }
`;
