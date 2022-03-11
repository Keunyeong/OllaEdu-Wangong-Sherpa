import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLogo } from "../assets";
import MenuList from "../elements/MenuList";

const Nav = props => {
  const [click, setClick] = useState(false);
  const [menuToggle, setMenuToggle] = useState("toggle_menu_list");
  const el = useRef();
  let jobName = "../src/assets/nav/police.png";
  let jobNameAlt = "POLICE";
  let jobLogo = "경찰";
  if (props.depart === "fire") {
    jobIcon = "../src/assets/nav/firefighter.png";
    jobName = "../src/assets/nav/fire.png";
    jobNameAlt = "FIRE";
    jobLogo = "소방";
  } else if (props.depart === "admin") {
    jobIcon = "../src/assets/nav/administrator.png";
    jobName = "../src/assets/nav/admin.png";
    jobNameAlt = "ADMIN";
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
          <div className="toggle_list">공지사항</div>
          <div className="toggle_list">마이페이지</div>
          <div className="toggle_list">성적현황</div>
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
      overflow: hidden;
      flex-direction: column;
      width: 100vw;
      position: absolute;
      top: 3rem;
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
      .toggle_list {
        display: flex;
        align-items: center;
        height: 3.75rem;
        font-size: 1.25rem;
      }
      &.view {
        display: flex;
        height: auto;
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
