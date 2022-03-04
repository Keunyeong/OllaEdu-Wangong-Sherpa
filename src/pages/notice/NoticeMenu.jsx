import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowRight from "../../assets/arrow_right.png";
import ArrowRightSelected from "../../assets/arrow_right_selected.png";

const Ul = styled.ul`
box-sizing: border-box;
padding: ${(240 / 982) * 100 + "vh"} 0;
width: 17%;
height: ${(782 / 982) * 100 + "vh"};
border-radius: 20px 0 0 20px;
`;
const List = styled.li`
  
  display: flex;
  align-items: center;
  justify-content: right;
  height: 20%;
  text-align: center;

  a {
    width: 100%;
    height: 100%;
  }

  span {
    font-size: ${(18 / 1512) * 100 + "vw"};
    margin-right: 1rem;
  }
`;
//background-color: ${props => props.color};

export default function NoticeMenu() {
  return (
    <Ul>
        <List>
          <NavLink 
          to="/notice/home"
          style={ ({isActive}) => ({background : isActive ? "#DFE0FF" : "#FFF"}) }
          >
            공지사항
            </NavLink>
        </List>
        <List>
          <NavLink 
          to="/notice/news"
          style={ ({isActive}) => ({background: isActive ? "#DFE0FF" : "#FFF"}) }
          >
           학원소식
            </NavLink>
        </List>
      </Ul>
  );
}