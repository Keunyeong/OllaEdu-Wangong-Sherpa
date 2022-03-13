import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";

const NoticeBoard = ({ data }) => {
  const params = useParams();
  return (
    <Ul main={params["*"] === "main" || params["*"] === "main/" ? true : false}>
      {data.map((el, i) => {
        return (
          <NavLink to={`main/${i}`} key={i}>
            <Li>
              <h5>{el.title}</h5>
              <h6>{el.author}</h6>
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
  width: ${(358 / 1512) * 100 + "vw"};
  height: 100%;
  margin-left: ${(40 / 1512) * 100 + "vw"};
  margin-right: ${(16 / 1512) * 100 + "vw"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  flex-shrink: 0;

  @media screen and (max-width: 991px) {
    display: ${props => (props.main ? "block" : "none")};
    width: 100%;
  }
`;

const Li = styled.li`
  font-family: Noto Sans KR;
  padding: 1rem;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  color: #1b1b1b;
  &:hover {
    background-color: rgba(241, 243, 255, 1);
  }
  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.125rem;
  }
  h6 {
    display: inline;
    font-size: 0.75rem;
    font-weight: 400;
    margin-right: 0.3125rem;
  }
  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: #6a6a6a;
  }
  p {
    font-size: 0.875rem;
    font-weight: 400;
    margin-top: 0.25rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
