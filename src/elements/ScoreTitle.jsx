import React from "react";
import styled from "styled-components";

const ScoreTitle = ({ grade }) => {
  const total = grade.filter(x => x["과목"] === "TOTAL");
  console.log(total);
  return (
    <ScoreContainer>
      총점
      <Score>
        {total[0]["당월점수"]}
        <Background />
      </Score>
    </ScoreContainer>
  );
};

export default ScoreTitle;

const ScoreContainer = styled.div`
  display: flex;
  width: 125px;
  height: 33px;
  margin-bottom: 17px;
  font-size: 20px;
  font-weight: 300;
  align-items: center;
  white-space: nowrap;
`;

const Score = styled.div`
  position: relative;
  font-size: 38px;
  font-weight: 500;
  margin-left: 44px;
`;

const Background = styled.div`
  position: absolute;
  left: -29px;
  bottom: 0;
  width: 79px;
  height: 19px;
  background-color: rgba(248, 171, 48, 0.4);
`;
