import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Schedule() {
  return (
    <>
      <Light top={0} left={0} highLightWidth={5.55} highLightTop={7.6} />
      <MypageSection
        title="일정표"
        subtitle="시험 및 이벤트 일정을 확인하세요."
      >
        <Main>
          <img src="../src/assets/schedule.png" alt="" />
        </Main>
      </MypageSection>
    </>
  );
}

const Main = styled.div`
  border: 1px solid red;
  width: 50vw;
  margin-bottom: 80px;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 991px) {
    width: 70vw;
  }
  @media screen and (max-width: 668px) {
    width: 80vw;
  }
`;
