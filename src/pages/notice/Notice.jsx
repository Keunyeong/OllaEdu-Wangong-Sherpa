import { useState } from "react";
import styled from "styled-components";
import NoticeSection from "./NoticeBoard";
import NoticeUl from "./NoticeUl";

export default function Notice() {
  const ids = ["공지사항","학원소식","정기외박 일정","학원비 납입","이벤트"];
  const [clickNotice, setClickNotice] = useState(false);
    const [clickNews, setClickNews] = useState(false);
    const [clickSchedule, setClickSchedule] = useState(false);
    const [clickPay, setClickPay] = useState(false);
    const [clickEvent, setClickEvent] = useState(false);
  
    const click = (id) => {
      if(id === "공지사항"){
        console.log("yeyeyee")
        setClickNotice(true);
        setClickNews(false);
        setClickSchedule(false);
        setClickPay(false);
        setClickEvent(false);
      } else if (id === "학원소식") {
        console.log("hohooh")
        setClickNotice(false);
        setClickNews(true);
        setClickSchedule(false);
        setClickPay(false);
        setClickEvent(false);
      } else if (id === "정기외박 일정") {
        console.log("kkkkkk")
        setClickNotice(false);
        setClickNews(false);
        setClickSchedule(true);
        setClickPay(false);
        setClickEvent(false);
      } else if (id === "학원비 납입") {
        console.log("lllllll")
        setClickNotice(false);
        setClickNews(false);
        setClickSchedule(false);
        setClickPay(true);
        setClickEvent(false);
      } else if (id === "이벤트") {
        console.log("wwwwww")
        setClickNotice(false);
        setClickNews(false);
        setClickSchedule(false);
        setClickPay(false);
        setClickEvent(true);
      }
    }
  
  return (
    <NoticeMain>
      <NoticeUl ids={ids} />
      <NoticeSection ids={ids[0]} click={click} clickState={clickNotice} />
    </NoticeMain>
  );
}

const NoticeMain = styled.main`
  width: ${(1200 / 1512) * 100 + "vw"};
  height: ${(782 / 982) * 100 + "vh"};
  margin: auto;
  border-radius: 20px;
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #FFFFFF;
  position: relative;
`;