import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NoticeBoard = ({ data }) => {
  return (
    <Ul>
      {data.map((el, i) => {
        return (
          <NavLink to={`${i}`} key={i}>
            <Li>
              <h2>{el.title}</h2>
              <span>{el.date}</span>
              <p>{el.text}</p>
            </Li>
          </NavLink>
        );
      })}
    </Ul>
  );
};

export default NoticeBoard;

const Ul = styled.ul`
  width: 358px;
  height: ${(765 / 982) * 100 + "vh"};
  margin-top: ${(17 / 982) * 100 + "vh"};
  margin-left: ${(20 / 996) * 100 + "vw"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 20px 20px 0 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  height: ${(121 / 982) * 100 + "vh"};
  overflow: hidden;
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
`;
