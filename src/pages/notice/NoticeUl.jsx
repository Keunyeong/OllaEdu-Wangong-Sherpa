import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NoticeList from "./NoticeList";

export default function NoticeUl({ids}) {
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
  <ListBox>
    <NoticeList id={ids[0]} click={click} clickState={clickNotice}/>
    <NoticeList id={ids[1]} click={click} clickState={clickNews}/>
    <NoticeList id={ids[2]} click={click} clickState={clickSchedule}/>
    <NoticeList id={ids[3]} click={click} clickState={clickPay}/>
    <NoticeList id={ids[4]} click={click} clickState={clickEvent}/>
  </ListBox>
  );
}

const ListBox = styled.ul`
  box-sizing: border-box;
  padding: ${(240 / 982) * 100 + "vh"} 0;
  width: 17%;
  height: ${(782 / 982) * 100 + "vh"};
  border-radius: 20px 0 0 20px;
`;

const List = styled.li`
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: right;
  height: 20%;
  text-align: center;

  span {
    font-size: ${(18 / 1512) * 100 + "vw"};
    margin-right: 1rem;
  }
`;