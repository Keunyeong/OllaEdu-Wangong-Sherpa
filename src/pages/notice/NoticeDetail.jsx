import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NoticeContext } from "./Notice";
import { useContext, useState, useEffect } from "react";

const NoticeDetail = () => {
  const params = useParams();
  const [notice, setNotice] = useState({});
  const noticeList = useContext(NoticeContext);
  useEffect(() => {
    setNotice(noticeList[params.id]);
  }, [params.id]);
  return (
    <Notice>
      <h5>{notice.title}</h5>
      <h6>{notice.author}</h6>
      <span>{notice.date}</span>
      <p>{notice.text}</p>
    </Notice>
  );
};

export default NoticeDetail;

const Notice = styled.div`
  font-family: Noto Sans KR;
  padding: 1.25rem;
  width: auto;
  height: 100%;
  margin-right: ${(40 / 1512) * 100 + "vw"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  color: #1b1b1b;
  &::-webkit-scrollbar {
    display: none;
  }
  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.69rem;
  }
  h6 {
    font-size: 0.625rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    color: #6a6a6a;
  }
  span {
    font-size: 0.625rem;
    font-weight: 300;
    color: #6a6a6a;
  }
`;
