import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { FilledStar, UnfilledStar } from "../assets";
import { useNavigate } from "react-router-dom";
const title = [
  { title: "경찰학", teacher: "김만일" },
  { title: "형법", teacher: "김만이" },
  { title: "형사법", teacher: "김만삼" }
];

const Rating = () => {
  const [star, setStar] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(star).length === 3) {
      navigate("/report/monthly");
    }
  }, [star]);
  return (
    <Page>
      <Question>모의고사 난이도는 어땠나요?</Question>
      <SubText>성적 열람을 위해 난이도 평가를 먼저 진행해주세요.</SubText>
      <CardContainer>
        {title.map((list, idx) => (
          <Card key={list.title}>
            <Title>{list.title}</Title>
            <SubTitle>{list.teacher}</SubTitle>

            <ReactStars
              size={50}
              onChange={newRating => {
                const title = list.title;
                const obj = {};
                obj[title] = newRating;
                setStar({ ...star, ...obj });
              }}
              emptyIcon={<Icon src={UnfilledStar} />}
              filledIcon={<Icon src={FilledStar} />}
            />
          </Card>
        ))}
      </CardContainer>
    </Page>
  );
};

export default Rating;

const Page = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  background-color: rgba(77, 77, 77, 0.62);
  display: flex;
  justify-content: center;
  padding-bottom: 508px;
`;

const Icon = styled.img`
  width: 48p;
  height: 48px;
`;

const Card = styled.div`
  width: ${(384 / 1512) * 100}vw;
  min-width: 260px;
  height: 194px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 991px) {
    width: 384px;
  }
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
`;

const SubTitle = styled.div`
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  margin-bottom: 33px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 356px auto 0 auto;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Question = styled.h2`
  position: absolute;
  top: 174px;
  left: ${(189 / 1512) * 100}vw;
  font-weight: 700;
  font-size: 48px;
  font-style: normal;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;

  @media (max-width: 667px) {
    font-size: 32px;
  }

  @media (max-width: 667px) {
    font-size: 24px;
  }
`;

const SubText = styled.p`
  position: absolute;
  top: 243px;
  left: ${(189 / 1512) * 100}vw;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  white-space: nowrap;

  @media (max-width: 667px) {
    display: flex;
    white-space: normal;
  }

  @media (max-width: 667px) {
    font-size: 16px;
  }
`;
