import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import arrowRight from "../../assets/nav/arrow_right.png";
import arrowSelect from "../../assets/nav/arrow_right_selected.png";

export default function NoticeList({id, click, clickState}) {
  const menuList = useRef();
  const [arrow, setArrow] = useState(arrowRight);
  useEffect(() => {
    if (clickState) {
      menuList.current.style.background = "#DFE0FF";
      setArrow(arrowSelect);
    } else {
      menuList.current.style.background = "#FFF";
      setArrow(arrowRight);
    }
  }, [clickState])
  return(
    <List ref={menuList} onClick={() => click(id)}>
      {id}
      <img src={arrow} alt="arrowRight"  />
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
  font-size: ${(18 / 1512) * 100 + "vw"};
  line-height: ${(22 / 1512) * 100 + "vw"};
  font-weight: 500;
  img {
    
  margin-left: ${(15 / 1512) * 100 + "vw"};
  }
`;