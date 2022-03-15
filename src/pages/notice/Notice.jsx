import styled from "styled-components";
import { useState, createContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NoticeBoard from "./NoticeBoard";
import NoticeDetail from "./NoticeDetail";

export const NoticeContext = createContext();

export const Notice = () => {
  const [noticeList, setNoticeList] = useState([{}]);

  const getNotice = async () => {
    const response = await fetch(`../../../src/assets/notice/noticeList.json`)
      .then(res => res.json())
      .then(res => res.items)
      .then(res => setNoticeList(res));
  };

  useEffect(() => {
    getNotice();
  }, []);

  return (
    <Page>
      <NoticeContext.Provider value={noticeList}>
        <div>
          <NoticeBoard data={noticeList} />
        </div>
        <Routes>
          <Route path="main" element={<NoticeDetail />} />
          <Route path="main/:id" index element={<NoticeDetail />} />
        </Routes>
      </NoticeContext.Provider>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100vw;
  position: relative;
  overflow-y: auto;
  margin-bottom: 2.5rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow: visible;
`;
