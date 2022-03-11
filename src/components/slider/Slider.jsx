import React, {useState} from 'react'
import styled from "styled-components";
import BtnSlider from './BtnSlider';
import { GrowthGraph } from '../../elements';

const dataSlider = [
  {
    title: "헌법",
    lastMonth: 72,
    thisMonth: 84
  },
  {
    title: "행정학",
    lastMonth: 72,
    thisMonth: 84
  },
  {
    title: "국어",
    lastMonth: 72,
    thisMonth: 84
  },
  {
    title: "영어",
    lastMonth: 72,
    thisMonth: 84
  },
  {
    title: "한국사",
    lastMonth: 72,
    thisMonth: 84
  },
];


export default function SliderTest() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if(slideIndex !== dataSlider.length){
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if(slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  }

  const moveDot = index => {
    setSlideIndex(index);
  }

  return (
    <ContainerSlider >
      {dataSlider.map((obj,index) => {
        return (
          <Slider
          key={index}
          activity={slideIndex === index + 1 ? "active-anim" : null}
          >
            <GrowthGraph scoreData={obj} title={obj.title} lastMonth={obj.lastMonth} thisMonth={obj.thisMonth} />
            
          </Slider>
        )
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

      <ContainerDots>
          {Array.from({length: 5}).map((item, index) => (
              <Dot 
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
  opacity: ${(props) => props.activity === "active-anim" ? "1": "0" };
  transition: opacity ease-in-out 0.4s;

  @media (max-width: 667px) {
    left: 35%;
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
  background: ${(props) => props.activity === "active" ? "#6A6A6A" : "#D8D8D8"};
`;