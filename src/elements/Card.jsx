import React from "react";
import styled from "styled-components";

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

const CardContainer = styled.div`
  width: 24rem;
  height: 17rem;
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  border-radius: 1.07rem;
`;
