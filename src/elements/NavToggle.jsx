import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavToggle({ cn }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Toggle className={cn}>
      <div className="toggle_list">
        <div className="title">
          <img src="../../src/assets/notice_icon.svg" alt="NOTICE_ICON" />
          공지사항
        </div>
        <div
          className={
            location.pathname === "/notice/main" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/notice/main");
          }}
        >
          전체공지
        </div>
        <div
          className={
            location.pathname === "/notice/main" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/notice/main");
          }}
        >
          학원비 납입
        </div>
      </div>
      <div className="toggle_list">
        <div className="title">
          <img src="../../src/assets/mypage_icon.svg" alt="MYPAGE_ICON" />
          마이페이지
        </div>
        <div
          className={
            location.pathname === "/mypage/main" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/mypage/main");
          }}
        >
          기본정보
        </div>
        <div
          className={
            location.pathname === "/mypage/schedule" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/mypage/schedule");
          }}
        >
          {" "}
          일정표
        </div>
      </div>
      <div className="toggle_list">
        <div className="title">
          <img src="../../src/assets/report_icon.svg" alt="REPORT_ICON" />
          성적현황
        </div>
        <div
          className={
            location.pathname === "/report/monthly" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/report/monthly");
          }}
        >
          모의고사
        </div>
        <div
          className={
            location.pathname === "/report/weekly" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/report/weekly");
          }}
        >
          중간종합
        </div>
        <div
          className={
            location.pathname === "/report/physical" ? "list selected" : "list"
          }
          onClick={() => {
            navigate("/report/physical");
          }}
        >
          체력증감
        </div>
      </div>
    </Toggle>
  );
}

const Toggle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  position: absolute;
  top: 2.8rem;
  left: 0;
  z-index: 99;
  background-color: rgba(241, 243, 255, 0.96);
  color: #032164;
  height: 0;
  transition: all 0.4s ease-out;
  overflow: hidden;
  box-shadow: 0px 12px 42px -3px rgba(24, 39, 75, 0.12),
    0px 12px 42px -6px rgba(24, 39, 75, 0.12);
  border-radius: 0px 0px 10px 10px;

  .toggle_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0;
    font-size: 1.25rem;

    .title {
      padding: 0 1rem;
      width: 100%;
      height: 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 10px 8px 16px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      img {
        width: 1rem;
        margin-right: 0.5rem;
      }
    }
    .list {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 20px 10px 45px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.25rem;
      cursor: pointer;
      :hover {
        color: #032164;
        background-color: #f1f3ff;
      }
      &.selected {
        background-color: #ffcb60;
      }
    }
  }
  &.view {
    height: 27.5rem;
  }
`;
