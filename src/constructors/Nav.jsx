import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavLogo, toggle } from "../assets";
import MenuList from "../elements/MenuList";
import NavToggle from "../elements/NavToggle";

const Nav = props => {
  const [click, setClick] = useState(false);
  const [menuToggle, setMenuToggle] = useState("toggle_menu_list");
  const el = useRef();
  let jobLogo = "경찰";
  if (props.depart === "fire") {
    jobLogo = "소방";
  } else if (props.depart === "admin") {
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
      menuToggle === "view" &&
      (!el.current || !el.current.contains(e.target))
    ) {
      setMenuToggle("");
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
        <img src={toggle} alt="TOGGLE" />
        <NavToggle cn={menuToggle} job={props.depart} />
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
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  width: 100%;
  height: 3.5rem;
  box-shadow: 0px 12px 42px -3px rgba(155, 155, 155, 0.12),
    0px 12px 42px -6px rgba(155, 155, 155, 0.12);
  background: #032164;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
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
      color: #032164;
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
    cursor: pointer;
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
