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
          left={1}
          highLightWidth={7.4}
          highLightWidth2={7.4}
          highLightTop={7.3}
          highLightTop2={7.3}
        />
        공지사항
      </H1>
      <Ol>
        {data.map((el, i) => {
          return (
            <NavLink to={`main/${i}`} key={i}>
              <Li>
                <H5>{el.title}</H5>
                <H6>{el.author}</H6>
                <Span>{el.date}</Span>
                <P>{el.text}</P>
              </Li>
            </NavLink>
          );
        })}
      </Ol>
    </NoticeList>
  );
};

export default NoticeBoard;

const NoticeList = styled.div`
  font-family: Noto Sans KR;
  @media screen and (max-width: 991px) {
    display: ${props => (props.params ? "block" : "none")};
  }
`;

const H1 = styled.h1`
  font-size: 2.125rem;
  font-weight: 700;
  line-height: 3.0625rem;
  margin: 71px 0 27px 26px;

  @media screen and (max-width: 667px) {
    font-size: 1.5rem;
    margin: 64px 0 32px 35px;
  }
`;

const Ol = styled.ol`
  width: ${(358 / 1512) * 100 + "vw"};
  height: ${(739 / 982) * 100 + "vh"};
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
  padding: 1rem;
  overflow: hidden;
  border-bottom: 1px solid #e8e8e8;
  color: #1b1b1b;
  &:hover {
    background-color: rgba(241, 243, 255, 1);
  }
`;

const H5 = styled.h5`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.125rem;
`;

const H6 = styled.h6`
  display: inline;
  font-size: 0.75rem;
  font-weight: 400;
  margin-right: 0.3125rem;
`;

const Span = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: #6a6a6a;
`;

const P = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: 0.25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
