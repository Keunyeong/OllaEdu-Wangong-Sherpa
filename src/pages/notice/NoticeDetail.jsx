import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { NoticeContext } from "./Notice";
import { useContext, useState, useEffect } from "react";
import { notice_arrow } from "../../assets";

const NoticeDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const noticeList = useContext(NoticeContext);
  const [notice, setNotice] = useState({});
  useEffect(() => {
    setNotice(noticeList[0]);
  }, [noticeList[0]]);
  useEffect(() => {
    if (params.id) setNotice(noticeList[params.id]);
  }, [params.id]);
  return (
    <Notice
      params={params["*"] === "main" || params["*"] === "main/" ? true : false}
    >
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={notice_arrow} alt="arrow_left" />
      </button>
      <h5>{notice.title}</h5>
      <span>
        <div className="author">{notice.author}</div>
        <div className="date">{notice.date}</div>
      </span>
      <p>{notice.text}</p>
      <img src={notice.image} alt={notice.title} />
    </Notice>
  );
};

export default NoticeDetail;

const Notice = styled.div`
  font-family: Noto Sans KR;
  padding: 1.25rem;
  margin-right: 16px;
  margin-top: 2.5rem;
  width: ${(1100 / 1512) * 100 + "vw"};
  max-height: ${(846 / 982) * 100 + "vh"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #ffffff;
  border-radius: 10px;
  overflow-y: scroll;
  color: #1b1b1b;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    display: none;
    border: none;
    padding: 0;
    background-color: transparent;
    margin-bottom: 0.625rem;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.625rem;
  }
  span {
    display: block;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #6a6a6a;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 1.25rem;
    div {
      margin-bottom: 0.3125rem;
    }
  }

  p {
    padding: 0.625rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.125rem;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  @media screen and (max-width: 991px) {
    display: ${props => (props.params ? "none" : "block")};
    width: 96vw;
    height: 100vh;
    margin-right: 0;
    button {
      display: inline-block;
    }
    span {
      div {
        margin-bottom: 0;
      }
    }
    p {
      padding: 0;
    }
  }

  @media screen and (max-width: 667px) {
    display: ${props => (props.params ? "none" : "block")};
    width: 100vw;
    height: 100vh;
    margin-right: 0;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
    h5 {
      font-size: 1rem;
    }
    span {
      margin-bottom: 1.625em;
      .author {
        font-weight: 500;
        margin-bottom: 0.25rem;
      }
      .date {
        font-weight: 300;
        margin-bottom: 1.44rem;
      }
    }
  }
`;
