import React from "react";
import styled from "styled-components";
import { Card } from "../elements";
import { Star } from "../assets";

const CardWrapper = ({
  width = "24em",
  height = "17em",
  title,
  children,
  padding = "none",
  max
}) => {
  return (
    <Article max={max}>
      <TitleContainer>
        <StarIcon src={Star} alt="starIcon" />
        <Title>{title}</Title>
      </TitleContainer>
      <Card width={width} height={height} padding={padding}>
        {children}
      </Card>
    </Article>
  );
};

export default CardWrapper;

const Article = styled.article`
  width: ${props => (props.max ? props.max : "")};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin: 0 0 0.688em 0;
`;

const StarIcon = styled.img`
  width: 1.5em;
  height: 1.438em;
`;

const Title = styled.h3`
  font-size: 1em;
  font-weight: 700;
  line-height: 1.5em;
  margin-left: 0.25em;
`;
