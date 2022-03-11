import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLogo } from "../assets";
import MenuList from "../elements/MenuList";

const Nav = props => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [menuToggle, setMenuToggle] = useState("toggle_menu_list");
  const el = useRef();
  let jobLogo = "경찰";
  if (props.depart === "fire") {
    jobIcon = "../src/assets/nav/firefighter.png";
    jobLogo = "소방";
  } else if (props.depart === "admin") {
    jobIcon = "../src/assets/nav/administrator.png";
    jobLogo = "행정";
  }
  const toggleEvent = () => {
    setMenuToggle(!menuToggle);
    if (menuToggle === "toggle_menu_list") {
      setMenuToggle("toggle_menu_list view");
    } else {
      setMenuToggle("toggle_menu_list");
    }
  };
  const handleCloseToggle = e => {
    if (
      menuToggle === "toggle_menu_list view" &&
      (!el.current || !el.current.contains(e.target))
    ) {
      setMenuToggle("toggle_menu_list");
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseToggle);
    return () => {
      window.addEventListener("click", handleCloseToggle);
    };
  }, [menuToggle]);

  return (
    <Navbar depart={props.depart}>
      <div className="logobox">
        <img className="logo" src={NavLogo} alt="NAVLOGO" />
        <div className="job">{jobLogo}</div>
      </div>
      <div className="toggle" onClick={toggleEvent} ref={el}>
        <img src="../src/assets/nav/toggle.svg" alt="TOGGLE" />
        <div className={menuToggle} depart={props.depart}>
          <div className="toggle_list">
            <div className="title">공지사항</div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/notice/main");
              }}
            >
              전체공지
            </div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/notice/main");
              }}
            >
              전체공지
            </div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/notice/main");
              }}
            >
              전체공지
            </div>
          </div>
          <div className="toggle_list">
            <div className="title">마이페이지</div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/mypage/main");
              }}
            >
              기본정보
            </div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/mypage/schedule");
              }}
            >
              {" "}
              일정표
            </div>
          </div>
          <div className="toggle_list">
            <div className="title">성적현황</div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/report/monthly");
              }}
            >
              모의고사
            </div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/report/weekly");
              }}
            >
              중간종합
            </div>
            <div
              className="list"
              depart={props.depart}
              onClick={() => {
                navigate("/report/physical");
              }}
            >
              체력증감
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <MenuList
          list="notice"
          path="notice"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          공지사항
        </MenuList>
        <MenuList
          list="mypage"
          path="mypage"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          마이페이지
        </MenuList>
        <MenuList
          list="report"
          path="monthly"
          job={props.depart}
          depart={props.depart}
          icon="Icon"
          click={click}
          setClick={setClick}
        >
          성적현황
        </MenuList>
        <div className="d_day" depart={props.depart}>
          D-<span>209</span>
        </div>
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  width: 100%;
  height: 3.5rem;
  background: ${props => {
    if (props.depart === "police") {
      return "#58A2EB";
    } else if (props.depart === "fire") {
      return "#F48065";
    } else if (props.depart === "admin") {
      return "#13C383";
    }
  }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logobox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: ${(40 / 1512) * 100 + "vw"};
    .logo {
      width: 5.375rem;
    }
    .job {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: #ffffff;
      padding-top: ${(5 / 1512) * 100 + "vw"};
      margin-right: ${(10 / 1512) * 100 + "vw"};
    }
  }
  .menu {
    display: flex;
    align-items: center;
    font-size: 0.874rem;
    font-family: Noto Sans KR;
    font-weight: 600;
    margin-right: ${(40 / 1512) * 100 + "vw"};

    .d_day {
      margin-left: 2.5rem;

      background-color: #ffffffc8;
      color: ${props => {
        if (props.depart === "police") {
          return "#58A2EB";
        } else if (props.depart === "fire") {
          return "#F48065";
        } else if (props.depart === "admin") {
          return "#13C383";
        }
      }};
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem 0.625rem;
      border-radius: 2.5rem;
    }
    @media screen and (max-width: 667px) {
      display: none;
    }
  }
  .toggle {
    display: none;
    .toggle_menu_list {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100vw;
      position: absolute;
      top: 2.8rem;
      left: 0;
      z-index: 99;
      background-color: ${props => {
        if (props.depart === "police") {
          return "#58A2EB";
        } else if (props.depart === "fire") {
          return "#F48065";
        } else if (props.depart === "admin") {
          return "#13C383";
        }
      }};
      color: #ffffffc8;
      height: 0;
      transition: all 0.4s ease-out;
      overflow: hidden;
      .toggle_list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.5rem 0;
        font-size: 1.25rem;
        .title {
          font-weight: 700;
          padding: 0 1rem;
          width: 100%;
          padding-bottom: 0.4rem;
          border-bottom: 1px solid #ffffffc8;
        }
        .list {
          padding: 0.3rem 1rem;
          width: 100%;
          text-align: right;
          font-size: 1rem;
          cursor: pointer;
          :hover {
            color: ${props => {
              if (props.depart === "police") {
                return "#58A2EB";
              } else if (props.depart === "fire") {
                return "#F48065";
              } else if (props.depart === "admin") {
                return "#13C383";
              }
            }};
            background-color: #ffffffc8;
          }
        }
      }
      &.view {
        height: 330px;
      }
    }
  }
  @media screen and (max-width: 667px) {
    height: 3rem;
    .logobox {
      .logo {
        width: 5.375rem;
      }
      .job {
        font-size: 0.75rem;
        line-height: 1.063rem;
      }
    }
    .toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: ${(40 / 1512) * 100 + "vw"};
      img {
        width: 1.5rem;
      }
    }
  }
`;

export default Nav;
