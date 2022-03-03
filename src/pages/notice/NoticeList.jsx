import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function NoticeList({id, click, clickState}) {
  const menuList = useRef();
  useEffect(() => {
    if (clickState) {
      menuList.current.style.background = "#DFE0FF";
    } else {
      menuList.current.style.background = "#FFF";
    }
  }, [clickState])
  return(
    <List ref={menuList} onClick={() => click(id)}>
      {id}
    </List>
  );
}

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