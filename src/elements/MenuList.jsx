import { useEffect, useRef } from "react";
import styled from "styled-components";

const MenuList = ({ children, list, job, click, clickState, icon }) => {
  const menuList = useRef();
  const upperList = list.toUpperCase();
  const src = `./src/assets/nav/${list}${icon}.png`;
  const src_job = `./src/assets/nav/${list}${icon}_${job}.png`;
  useEffect(() => {
    if (clickState) {
      menuList.current.style.background = "#fff";
      if (job === "police") {
        menuList.current.style.color = "#1482ef";
      } else if (job === "fire") {
        menuList.current.style.color = "#F48065";
      } else if (job === "admin") {
        menuList.current.style.color = "#13C383";
      }
    } else {
      if (job === "police") {
        menuList.current.style.background = "#1482ef";
      } else if (job === "fire") {
        menuList.current.style.background = "#F48065";
      } else if (job === "admin") {
        menuList.current.style.background = "#13C383";
      }
      menuList.current.style.color = "#fff";
    }
  }, [clickState, job]);
  return (
    <List
      ref={menuList}
      onClick={() => {
        click(list);
      }}
      depart={job}
      icon={icon}
    >
      {!clickState ? (
        <img src={src} alt={`${upperList}`} />
      ) : (
        <img src={src_job} alt={`${upperList}`} />
      )}
      {children}
      {list === "report" &&
        (!clickState ? (
          <img
            className="arrow arrow_down"
            src="./src/assets/nav/arrow_down.png"
            alt="ARROWDOWN"
          />
        ) : (
          <img
            className="arrow arrow_up"
            src={`./src/assets/nav/arrow_up_${job}.png`}
            alt="ARROWUP"
          />
        ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${props =>
    props.icon === "Icon"
      ? (30 / 1512) * 100 + "vw"
      : (40 / 1512) * 100 + "vw"};
  width: ${(200 / 1512) * 100 + "vw"};
  height: ${props =>
    props.icon === "Icon"
      ? (60 / 1512) * 100 + "vw"
      : (41 / 1512) * 100 + "vw"};
  ${props => {
    return (
      props.icon !== "Icon" &&
      `font-weight: 600;
      font-size: ${(16 / 1512) * 100 + "vw"};
      line-height: ${(19 / 1512) * 100 + "vw"};
      margin-top: ${(5 / 1512) * 100 + "vw"};`
    );
  }}
  cursor: pointer;
  img {
    width: ${(24 / 1512) * 100 + "vw"};
    margin-right: ${(10 / 1512) * 100 + "vw"};
  }
  .arrow {
    margin-left: ${(10 / 1512) * 100 + "vw"};
  }
`;

export default MenuList;
