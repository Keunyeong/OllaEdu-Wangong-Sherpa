import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const NavToggleList = ({ list, job, path, state }) => {
  let listArr = ["모의고사", "중간종합", "체력증감"];
  let urlArr = ["/report/monthly", "/report/weekly", "/report/physical"];
  if (list === "notice") {
    listArr = ["전체공지", "일정공지", "학원소개"];
    urlArr = ["/notice/main", "/notice/schedule", "/notice/academy"];
  } else if (list === "mypage") {
    listArr = ["기본정보", "시간표", "QnA"];
    urlArr = ["/mypage/main", "/mypage/schedule", "/mypage/academy"];
  }
  return (
    <ToggleList job={job} className="toggle_list" state={state}>
      <div className="line"></div>
      {listArr.map((li, i) => {
        return (
          <NavLink to={urlArr[i]} className="navlist" key={i}>
            {li}
          </NavLink>
        );
      })}
    </ToggleList>
  );
};

const ToggleList = styled.div`
  display: ${props => {
    return props.state ? "block" : "none";
  }};
  width: ${(126 / 1512) * 100 + "vw"};
  position: absolute;
  top: ${(56 / 1512) * 100 + "vw"};
  left: 0;
  z-index: 99;
  border-radius: 0 0 ${(10 / 1512) * 100 + "vw"} ${(10 / 1512) * 100 + "vw"};
  background-color: #fff;
  .navlist {
    height: ${(40 / 1512) * 100 + "vw"};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => {
      if (props.job === "police") {
        return "#1482ef";
      } else if (props.job === "fire") {
        return "#F48065";
      } else if (props.job === "admin") {
        return "#13C383";
      }
    }};
    :hover {
      color: ${props => {
        if (props.job === "police") {
          return "#1482ef";
        } else if (props.job === "fire") {
          return "#F48065";
        } else if (props.job === "admin") {
          return "#13C383";
        }
      }};
      background-color: ${props => {
        if (props.job === "police") {
          return "#bcd6f0";
        } else if (props.job === "fire") {
          return "#f7d5cd";
        } else if (props.job === "admin") {
          return "#c7f7e6";
        }
      }};
    }
  }
  .line {
    position: absolute;
    border: 1px solid
      ${props => {
        if (props.job === "police") {
          return "#bcd6f0";
        } else if (props.job === "fire") {
          return "#f7d5cd";
        } else if (props.job === "admin") {
          return "#c7f7e6";
        }
      }};
    top: ${(1 / 12) * 100 + "%"};
    left: ${(14 / 126) * 100 + "%"};
    width: ${(1 / 1512) * 100 + "vw"};
    height: ${(10 / 12) * 100 + "%"};
    border-radius: 1px;
  }
`;

export default NavToggleList;
