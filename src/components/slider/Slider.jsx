import React, { useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";
import { GrowthGraph } from "../../elements";

export default function SliderTest({ grade }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slice = grade.slice(1, grade.length);

  const nextSlide = () => {
    if (slideIndex !== slice.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slice.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slice.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <ContainerSlider>
      {slice.map((obj, index) => {
        const { 전월점수, 당월점수, 과목 } = obj;

        return (
          <Slider
            key={과목}
            activity={slideIndex === index + 1 ? "active-anim" : null}
          >
            <GrowthGraph
              scoreData={[
                과목,
                Math.round(Number(전월점수)),
                Math.round(Number(당월점수))
              ]}
              title={과목}
              lastMonth={obj.lastMonth}
              thisMonth={obj.thisMonth}
            />
          </Slider>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <ContainerDots>
        {Array.from({ length: slice.length }).map((item, index) => (
          <Dot
            key={index}
            onClick={() => moveDot(index + 1)}
            activity={slideIndex === index + 1 ? "active" : null}
          ></Dot>
        ))}
      </ContainerDots>
    </ContainerSlider>
  );
}
const ContainerSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const Slider = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 12%;
  opacity: ${props => (props.activity === "active-anim" ? "1" : "0")};
  transition: opacity ease-in-out 0.4s;

  @media (max-width: 667px) {
    left: 29%;
  }
`;
const ContainerDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 3px solid #f1f1f1;
  margin: 0 5px;
  background: ${props => (props.activity === "active" ? "#6A6A6A" : "#D8D8D8")};
`;
