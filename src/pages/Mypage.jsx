import styled from "styled-components";
import List from "../elements/List";
import MypageMain from "../constructors/MypageMain";

const Mypage = () => {
  const menuClick = e => {
    e.target.style.background = "#DFE0FF";
  };
  return (
    <Page>
      <div className="menu">
        <div className="profile">
          <img src="../src/assets/mypage_avatar.png" alt="" />
          <span className="name">강병성</span>
          <span className="class">소방1반</span>
          <span className="location">안동캠퍼스</span>
        </div>
        <div className="list">
          <List menuClick={menuClick}>기본정보</List>
          <List menuClick={menuClick}>시간표</List>
          <List menuClick={menuClick}>질문과 답변</List>
        </div>
      </div>
      <div className="main"></div>
    </Page>
  );
};

const Page = styled.div`
  background-color: #fff;
  border-radius: ${(20 / 1512) * 100 + "vw"};
  width: ${(1300 / 1512) * 100 + "vw"};
  height: ${(782 / 982) * 100 + "vh"};
  margin: ${(60 / 982) * 100 + "vh"} ${(56 / 1512) * 100 + "vw"};
  display: flex;
  box-shadow: 0px 8px 22px -6px rgba(24, 39, 75, 0.12),
    0px 14px 64px -4px rgba(24, 39, 75, 0.12);
  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ((730/782) * 100) +"%";
    width: ${(204 / 1200) * 100 + "%"};
    border-radius: ${(20 / 1512) * 100 + "vw"} 0 0 ${(20 / 1512) * 100 + "vw"};
    border-right: 1px solid #e8e8e8;
    margin: ${(26 / 982) * 100 + "vh"} 0;
    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: ${(120 / 1512) * 100 + "vw"};
      margin-top: ${(50 / 1512) * 100 + "vw"};
      img {
        width: ${(56 / 1512) * 100 + "vw"};
        margin-top: ${(10 / 1512) * 100 + "vw"};
      }
      span {
        display: block;
        text-align: center;
        color: #1b1b1b;
      }
      .name {
        font-weight: 600;
        font-size: ${(20 / 1512) * 100 + "vw"};
        line-height: ${(22 / 1512) * 100 + "vw"};
        margin-top: ${(10 / 1512) * 100 + "vw"};
      }
      .class {
        font-weight: normal;
        font-size: ${(14 / 1512) * 100 + "vw"};
        line-height: ${(16 / 1512) * 100 + "vw"};
        margin-top: ${(10 / 1512) * 100 + "vw"};
      }
      .location {
        font-weight: 300;
        font-size: ${(11 / 1512) * 100 + "vw"};
        line-height: ${(13 / 1512) * 100 + "vw"};
        margin-top: ${(10 / 1512) * 100 + "vw"};
        margin-bottom: ${(50 / 1512) * 100 + "vw"};
        color: #6a6a6a;
      }
    }
    .list {
      width: ${(204 / 1512) * 100 + "vw"};
    }
  }
  .main {
    height: 100%;
    width: ${((1200 - 204) / 1200) * 100 + "%"};
    border-radius: 0 ${(20 / 1512) * 100 + "vw"} ${(20 / 1512) * 100 + "vw"} 0;
  }
`;

export default Mypage;
