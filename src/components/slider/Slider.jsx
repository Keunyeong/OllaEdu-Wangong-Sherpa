import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnSlider from "./BtnSlider";
import { GrowthGraph } from "../../elements";
import ArrowUp from "../../assets/arrow_Up_MD.svg";
import ArrowDown from "../../assets/arrow_Down_MD.svg";

export default function SliderTest({ grade }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const slice = grade.slice(1, grade.length);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

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

  const windowSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSize);
    return () => {
      window.removeEventListener("resize", windowSize);
    }
    
  }, [screenSize]);

  if (screenSize > 990 || screenSize < 668) {
    return (
      <ContainerSlider>
        {slice.map((obj, index) => {
          let { 전월점수, 당월점수, 과목, 시험명 } = obj;

          if (시험명 === "체력측정 결과") {
            전월점수 *= 10;
            당월점수 *= 10;
          }

          const growth = Math.round(Number(당월점수 - 전월점수));

          const data = [
            과목,
            Math.round(Number(전월점수)),
            Math.round(Number(당월점수))
          ];

          return (
            <Slider
              key={과목}
              activity={slideIndex === index + 1 ? "active-anim" : null}
            >
              <Increase>
                <span>
                  {growth < 0 ? Math.abs(growth) : growth}점{" "}
                  {growth < 0 ? "감소" : "증가"}
                </span>
                <img src={growth < 0 ? ArrowDown : ArrowUp} alt="" />
              </Increase>
              <GrowthGraph scoreData={data} title={과목} screen={false} />
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
  } else {
    return (
      <TouchSlideBigBox>
        <SpanBox>
          <Span>
            <Svg>
              <SmallCircle fill="#D8D8D8" />
            </Svg>
            <span>전월 점수</span>
          </Span>
          <Span>
            <Svg>
              <SmallCircle fill="#FFCB60" />
            </Svg>
            <span>당월 점수</span>
          </Span>
        </SpanBox>
        <TouchSlideBox>
          {slice.map((obj, index) => {
            let { 전월점수, 당월점수, 과목, 시험명 } = obj;

            if (시험명 === "체력측정 결과") {
              전월점수 *= 10;
              당월점수 *= 10;
            }

            const data = [
              과목,
              Math.round(Number(전월점수)),
              Math.round(Number(당월점수))
            ];

            let sliceLength = false;
            if (index >= 5) {
              sliceLength = true;
            }

            return (
              <LittleBox sliceLength={sliceLength} key={과목}>
                <TouchSlide key={과목}>
                  <GrowthGraph scoreData={data} title={과목} screen={true} />
                </TouchSlide>
              </LittleBox>
            );
          })}
        </TouchSlideBox>

        <BtnSlider direction={"next"} />
      </TouchSlideBigBox>
    );
  }
}

const TouchSlideBigBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ContainerSlider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Increase = styled.div`
  position: absolute;
  top: -3%;
  left: 8%;
  display: flex;
  justify-content: center;
  width: 27%;
  height: 11%;
  border: 1px solid #9498ef;
  font-size: 0.775rem;
  text-align: center;
  line-height: 150%;
  box-sizing: border-box;
  border-radius: 93px;
  
  span {
    margin-left: 5px;
  }

  @media (max-width: 992px) {
    display: none;
  }

  @media (max-width: 668px) {
    display: block;
    width: 5.5rem;
    left: 1.2rem;
  }
`;

const Slider = styled.div`
  position: absolute;
  top: 15%;
  left: 12%;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.activity === "active-anim" ? "1" : "0")};
  transition: opacity ease-in-out 0.4s;

  @media (max-width: 667px) {
    left: 28%;
  }
  @media (max-width: 440px) {
    left: 22%;
  }
  @media (max-width: 400px) {
    left: 20%;
  }
`;
const TouchSlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: auto;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 7px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d8d8d8;
    border-radius: 5px;
  }
  @media (max-width: 845px) {
  }
`;
const LittleBox = styled.div`
  display: flex;
  margin-left: ${props => (props.sliceLength ? "250px" : "0")};
`;
const TouchSlide = styled.div`
  height: 100%;
  padding-right: 30px;
  margin-bottom: 7px;
`;

const ContainerDots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  display: flex;
  transform: translateX(-50%);
`;
const Dot = styled.div`
  background: ${props => (props.activity === "active" ? "#6A6A6A" : "#D8D8D8")};
  width: 10px;
  height: 10px;
  border: 3px solid #f1f1f1;
  border-radius: 50%;
  margin: 0 5px;
`;
const SpanBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  box-sizing: border-box;
  padding-top: 10px;
  padding-left: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  height: 20px;
`;

const Svg = styled.svg`
  width: 7.74px;
  height: 7.74px;
`;

const SmallCircle = styled.circle`
  cx: 3.87px;
  cy: 3.87px;
  r: 3.87px;
`;
