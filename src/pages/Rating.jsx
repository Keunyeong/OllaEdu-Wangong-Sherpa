import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const title = [
  { title: "경찰학", teacher: "김만일" },
  { title: "형법", teacher: "김만이" },
  { title: "형사법", teacher: "김만삼" }
];

const Rating = () => {
  return (
    <Page>
      <CardContainer>
        {title.map(list => (
          <Card key={list.title}>
            <Title>{list.title}</Title>
            <SubTitle>{list.teacher}</SubTitle>
            <ReactStars
              size={50}
              onChange={newRating => {
                console.log(newRating);
              }}
              emptyIcon={<i className="far fa-star" />}
              halfIcon={<i className="fa fa-star-half-alt" />}
              filledIcon={<i className="fa fa-star" />}
            />
          </Card>
        ))}
      </CardContainer>
    </Page>
  );
};

export default Rating;

const Page = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(77, 77, 77, 0.62);
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 384px;
  height: 194px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  flex-wrap: wrap;
  gap: 24px;
  margin: 356px auto 0 auto;
  justify-content: center;
`;

const Question = styled.h2``;
