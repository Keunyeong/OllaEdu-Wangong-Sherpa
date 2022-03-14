import styled from "styled-components";
import { NavLink, useParams } from "react-router-dom";
import Light from "../../elements/Light";

const NoticeBoard = ({ data }) => {
  const params = useParams();
  return (
    <NoticeList
      params={params["*"] === "main" || params["*"] === "main/" ? true : false}
    >
      <H1>
        <Light
          top={0}
          left={0}
          highLightWidth={7.4}
          highLightWidth2={7.4}
          highLightTop={7.3}
          highLightTop2={7.3}
        />
        공지사항
      </H1>
      <Ul>
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
    </NoticeList>
  );
};

export default NoticeBoard;

const NoticeList = styled.div`
  @media screen and (max-width: 991px) {
    display: ${props => (props.params ? "block" : "none")};
  }

  @media screen and (max-width: 667px) {
    display: ${props => (props.params ? "block" : "none")};
  }
`;

const H1 = styled.h1`
  font-size: 34px;
  font-weight: 700;
  line-height: 49px;
  margin: 71px 0 27px 26px;

  @media screen and (max-width: 667px) {
    font-size: 24px;
    margin: 64px 0 32px 35px;
  }
`;

const Ul = styled.ul`
  width: ${(358 / 1512) * 100 + "vw"};
  height: 100%;
  margin-left: 16px;
  margin-right: 16px;
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
    width: 96vw;
  }

  @media screen and (max-width: 667px) {
    width: 100vw;
    border-radius: 0;
    box-shadow: none;
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
