import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";

const Profile = () => {
  return (
    <>
      <Light
        top={0}
        left={-0.6}
        highLightWidth={7.4}
        highLightWidth2={7.4}
        highLightTop={7.3}
        highLightTop2={7.3}
      />
      <MypageSection
        title="기본정보"
        subtitle="개인정보 변동사항은 이곳에서 수정해 주세요."
      >
        <Info>
          <div className="name">
            <div>이름</div>
            <div className="box">
              <span>강병석</span>
            </div>
          </div>
          <div className="phone">
            <div>휴대폰</div>
            <div className="box">
              <span>01054356692</span>
            </div>
          </div>
          <div className="adress">
            <div>주소</div>
            <div className="box">
              <span>서울특별시 송파구 송파대로 112-12</span>
            </div>
          </div>
          <div className="birthday">
            <div>생년월일</div>
          </div>
        </Info>
      </MypageSection>
    </>
  );
};

const Info = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.448rem;
  color: #6a6a6a;
  margin-bottom: 80px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: ${(32 / 1512) * 100 + "vw"};
    .box {
      width: 20.5rem;
      height: auto;
      background: #d8d8d8;
      border-radius: 5px;
      padding: 0 ${(16 / 1512) * 100 + "vw"};
      text-align: left;
      padding: 0.3rem 0.7rem;
    }

    & > div {
      width: 6.25rem;
      text-align: right;
      padding-right: ${(20 / 1512) * 100 + "vw"};
    }
    @media screen and (max-width: 667px) {
      flex-direction: column;
      align-items: flex-start;
      .box {
        width: 100%;
        height: auto;
      }
      & > div {
        text-align: left;
        margin-top: 0.5rem;
      }
    }
  }
`;

export default Profile;
