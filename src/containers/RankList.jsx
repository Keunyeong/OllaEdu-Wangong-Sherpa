import React from "react";
import styled from "styled-components";
import { ProgressBar } from "../elements";
const RankList = ({ grade }) => {
  const slice = grade.slice(1, grade.length);

  return (
    <Container>
      <TitleConatiner>
        <TyphoGraphy fs="12px" fw={700}>
          총점
        </TyphoGraphy>
        <Absolute>
          <ProgressBar
            bg="rgba(100, 100, 165, 0.8)"
            cg="#6464A5"
            score={grade[0]["당월점수"] / 300}
          />
        </Absolute>
        <TyphoGraphy fs="12px" fw={700}>
          {grade[0]["순위"]}등
          <TyphoGraphy fs="10px" fw={300}>
            /{grade[0]["응시인원"]}명
          </TyphoGraphy>
        </TyphoGraphy>
      </TitleConatiner>
      <Ul>
        {slice.map(obj => {
          return (
            <Li key={obj["과목"]}>
              <TyphoGraphy fs="12px" fw={300}>
                {obj["과목"]}
              </TyphoGraphy>
              <Absolute>
                <ProgressBar score={obj["당월점수"] / 100} />
              </Absolute>
              <TyphoGraphy fs="12px" fw={700}>
                {obj["순위"]}등
                <TyphoGraphy fs="10px" fw={300}>
                  /{obj["응시인원"]}명
                </TyphoGraphy>
              </TyphoGraphy>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
};

export default RankList;

const Container = styled.section`
  width: 15.813em;
  height: 100%;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TitleConatiner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 0.5px solid #d8d8d8;
  justify-content: space-between;
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

const Ul = styled.ul`
  margin-top: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  padding: 2.5px 0;

  & + & {
    margin-top: 15px;
  }
`;
