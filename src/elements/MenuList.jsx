import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const MenuList = ({ children, list, job, icon, path, click, setClick }) => {
  const url = useLocation();
  let urlPath = `/main/${path}`;
  const [clickState, setClickState] = useState(false);
  const upperList = list.toUpperCase();
  const src = `../src/assets/nav/${list}${icon}.png`;
  const src_job = `../src/assets/nav/${list}${icon}_${job}.png`;
  useEffect(() => {
    if (urlPath === url.pathname) {
      if (list === "report") {
        setClickState(false);
      } else {
        setClickState(true);
      }
    } else {
      setClickState(false);
    }
    if (list === "report") {
      urlPath = url.pathname;
    }
  }, [url]);

  return (
    <List
      onClick={() => {
        if (list === "report") {
          setClick(!click);
        }
      }}
    >
      <NavLink
        depart={job}
        icon={icon}
        className={({ isActive }) => {
          return list === "report"
            ? "list"
            : isActive
            ? "list selected"
            : "list";
        }}
        to={urlPath}
      >
        {!children &&
          (!clickState ? (
            <img src={src} alt={`${upperList}`} />
          ) : (
            <img src={src_job} alt={`${upperList}`} />
          ))}
        {children}
      </NavLink>
      {list === "report" &&
        (!click ? (
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              d="M14.7033 6.86997C14.9767 6.59661 14.9767 6.15339 14.7033 5.88003C14.4299 5.60666 13.9867 5.60666 13.7133 5.88003L14.7033 6.86997ZM9.24999 11.3333L8.75502 11.8283C9.02838 12.1017 9.4716 12.1017 9.74497 11.8283L9.24999 11.3333ZM4.78663 5.88003C4.51326 5.60666 4.07005 5.60666 3.79668 5.88003C3.52331 6.15339 3.52331 6.59661 3.79668 6.86997L4.78663 5.88003ZM13.7133 5.88003L8.75502 10.8384L9.74497 11.8283L14.7033 6.86997L13.7133 5.88003ZM9.74497 10.8384L4.78663 5.88003L3.79668 6.86997L8.75502 11.8283L9.74497 10.8384Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrow"
          >
            <path
              d="M3.79667 10.13C3.5233 10.4034 3.5233 10.8466 3.79667 11.12C4.07004 11.3933 4.51325 11.3933 4.78662 11.12L3.79667 10.13ZM9.24998 5.66667L9.74495 5.17169C9.47159 4.89832 9.02837 4.89832 8.755 5.17169L9.24998 5.66667ZM13.7133 11.12C13.9867 11.3933 14.4299 11.3933 14.7033 11.12C14.9767 10.8466 14.9767 10.4034 14.7033 10.13L13.7133 11.12ZM4.78662 11.12L9.74495 6.16164L8.755 5.17169L3.79667 10.13L4.78662 11.12ZM8.755 6.16164L13.7133 11.12L14.7033 10.13L9.74495 5.17169L8.755 6.16164Z"
              fill="white"
            />
          </svg>
        ))}
    </List>
  );
};

const List = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffffc8;
    width: ${(100 / 1512) * 100 + "vw"};
    height: ${props =>
      props.icon === "Icon"
        ? (60 / 1512) * 100 + "vw"
        : (41 / 1512) * 100 + "vw"};
    font-weight: 600;
    font-size: ${(16 / 1512) * 100 + "vw"};
    line-height: ${(19 / 1512) * 100 + "vw"};
    margin-top: ${(5 / 1512) * 100 + "vw"};
    cursor: pointer;
    img {
      width: ${(30 / 1512) * 100 + "vw"};
      margin-right: ${(10 / 1512) * 100 + "vw"};
    }

    &.selected {
      color: #1482ef;
      background-color: #fff;
    }
  }
  .arrow {
    position: absolute;
    bottom: 0;
    right: ${(14.25 / 1512) * 100 + "vw"};
    width: ${(17 / 1512) * 100 + "vw"};
  }
`;

export default MenuList;
