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
  height: 20%;
  text-align: center;

  a {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 100%;
  }

  a > span {
    font-size: ${(18 / 1512) * 100 + "vw"};
    margin-right: 1rem;
  }
`;

export default function NoticeMenu({locate}) {
  console.log(locate)
  return (
    <Ul>
        <List>
          <NavLink 
          to="home"
          style={ ({isActive}) => ({background : isActive ? "#DFE0FF" : "#FFF"}) }
          >
            <span>공지사항</span>
            {locate==="home" ?<img src={ArrowRightSelected} alt="ArrowRightSelected" /> : <img src={ArrowRight} alt="ArrowRight" />}
            </NavLink>
        </List>
        <List>
          <NavLink 
          to="news"
          style={ ({isActive}) => ({background: isActive ? "#DFE0FF" : "#FFF"}) }
          >
           <span>학원소식</span>
           {locate==="news" ?<img src={ArrowRightSelected} alt="ArrowRightSelected" /> : <img src={ArrowRight} alt="ArrowRight" />}
            </NavLink>
        </List>
        <List>
          <NavLink 
          to="schedule"
          style={ ({isActive}) => ({background: isActive ? "#DFE0FF" : "#FFF"}) }
          >
           <span>정기외박 일정</span>
           {locate==="schedule" ?<img src={ArrowRightSelected} alt="ArrowRightSelected" /> : <img src={ArrowRight} alt="ArrowRight" />}
            </NavLink>
        </List>
        <List>
          <NavLink 
          to="pay"
          style={ ({isActive}) => ({background: isActive ? "#DFE0FF" : "#FFF"}) }
          >
           <span>학원비 납입 안내</span>
           {locate==="pay" ?<img src={ArrowRightSelected} alt="ArrowRightSelected" /> : <img src={ArrowRight} alt="ArrowRight" />}
            </NavLink>
        </List>
        <List>
          <NavLink 
          to="event"
          style={ ({isActive}) => ({background: isActive ? "#DFE0FF" : "#FFF"}) }
          >
           <span>이벤트</span>
           {locate==="event" ?<img src={ArrowRightSelected} alt="ArrowRightSelected" /> : <img src={ArrowRight} alt="ArrowRight" />}
            </NavLink>
        </List>
      </Ul>
  );
}