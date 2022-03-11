import React from "react";
import styled from "styled-components";
import ArrowRight from "../../assets/arrow_right.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <Btn
      onClick={moveSlide}
      btn={direction}
      btnDirection={direction === "next" ? "next" : "prev"}
    >
      {direction === "next" ? <img src={ArrowRight} alt="" /> : <img src={ArrowRight} alt="" />}
    </Btn>
  );
}

const Btn = styled.button`
width: 10px;
height: 10px;
background-color: transparent;
border: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: ${(props) => props.btnDirection === "next" ? "50%" : "50%" };
  right: ${(props) => props.btn === "next" ? "10px" : "0" };
  left: ${(props) => props.btn === "prev" ? "10px" : null };

  img {
    width: 20px;
    height: 20px;
  }
  `;