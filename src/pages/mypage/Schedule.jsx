import { useContext, useMemo } from "react";
import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";
import { Context } from "../../context/Context";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();

export default function Schedule() {
  const { SRC_TITLE } = useContext(Context).userInfo;

  let category = useMemo(() => {
    const job = SRC_TITLE.slice(0, 2);
    if (job === "경찰") return "police";
    if (job === "소방") return "fire;";
    if (job === "행정") return "admin";
  }, [SRC_TITLE]);

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
            src={`https://kimcodi.kr\/upload\/notice_schedule\/${year}${
              (month + "").length === 1 ? "0" + month : month
            }${category}.png`}
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
