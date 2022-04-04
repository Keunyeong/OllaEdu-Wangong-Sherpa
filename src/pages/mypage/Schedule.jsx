import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Schedule() {
  return (
    <>
      <Light
        top={0}
        left={-1}
        highLightWidth={5.55}
        highLightTop={7.3}
        highLightWidth2={5.55}
        highLightTop2={7.3}
      />
      <MypageSection
        title="일정표"
        subtitle="시험 및 이벤트 일정을 확인하세요."
      >
        <Main>
          <img
            src="https://user-images.githubusercontent.com/71649055/158953198-91fea9b1-0b3c-4614-8f78-e1b995718ab4.png"
            alt="schedule"
          />
        </Main>
      </MypageSection>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 668px) {
    height: 51vh;
  }
`;
