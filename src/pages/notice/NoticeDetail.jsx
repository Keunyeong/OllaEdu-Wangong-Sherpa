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
      <h2>{notice.title}</h2>
      <span>{notice.date}</span>
      <p>{notice.text}</p>
    </Notice>
  );
};

export default NoticeDetail;

const Notice = styled.div`
  padding: 20px;
  width: 1058px;
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
