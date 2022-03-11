import styled from "styled-components";
import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import NoticeBoard from "./NoticeBoard";
import NoticeDetail from "./NoticeDetail";

const data = [
  {
    title: "제목0 공지사항입니다.",
    date: "2022/02/20",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut itaque cupiditate error nemo, voluptas obcaecati sed soluta officia quam a aspernatur quisquam laboriosam facere mollitia optio laudantium! Debitis, non! lorem"
  },
  {
    title: "제목1 공지사항입니다.",
    date: "2022/02/19",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis nesciunt culpa deserunt reprehenderit tempora itaque! Sunt quo assumenda veritatis neque consequuntur nesciunt, non consectetur possimus, dignissimos, numquam saepe velit."
  },
  {
    title: "제목2 공지사항입니다.",
    date: "2022/02/18",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur tempore exercitationem sapiente ducimus iure eius asperiores debitis sint reiciendis corporis veniam dolores a at, sunt, architecto quis nostrum porro placeat!"
  },
  {
    title: "제목3 공지사항입니다.",
    date: "2022/02/17",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatem natus voluptates nulla, aperiam aspernatur eligendi ut distinctio laudantium hic vel est harum illo nam. Ex, magnam. Neque, vero debitis!"
  },
  {
    title: "제목4 공지사항입니다.",
    date: "2022/02/16",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim odio autem doloremque, ex minus vel illo sed! Fuga corporis nobis, non, iste sapiente suscipit ab perferendis laborum quam similique odio."
  },
  {
    title: "제목5 공지사항입니다.",
    date: "2022/02/15",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla molestias odit laudantium, optio quis accusamus rerum est nesciunt hic unde exercitationem autem non, quidem ea neque inventore, eligendi similique."
  },
  {
    title: "제목6 공지사항입니다.",
    date: "2022/02/14",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod nulla inventore. Architecto sed rem recusandae vel inventore possimus porro placeat, dicta voluptas autem corporis tempore doloremque. Provident, porro eaque."
  },
  {
    title: "제목7 공지사항입니다.",
    date: "2022/02/13",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt provident id, natus aliquid sint possimus ipsum corporis ex officia sapiente eius nobis nostrum porro molestiae aperiam explicabo voluptates excepturi."
  },
  {
    title: "제목8 공지사항입니다.",
    date: "2022/02/12",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed consequuntur quaerat repellendus, facere vitae aliquam sequi, dolor id velit vero odio ipsa modi corporis alias, quia maxime qui cupiditate eveniet?"
  },
  {
    title: "제목9 공지사항입니다.",
    date: "2022/02/11",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius distinctio possimus repudiandae rem autem vero eum quibusdam asperiores beatae obcaecati, aperiam magni debitis sapiente laborum incidunt repellat? Nemo, nesciunt!"
  },
  {
    title: "제목10 공지사항입니다.",
    date: "2022/02/10",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quia ipsum, similique magnam in perferendis, nam dolorem quos provident, necessitatibus voluptatum. Sed, neque quae. Perspiciatis nihil provident excepturi assumenda molestiae?"
  },
  {
    title: "제목11 공지사항입니다.",
    date: "2022/02/09",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta debitis quo error velit nemo deleniti exercitationem rem sint! Rem repellendus repellat deleniti vero dignissimos, dicta modi fugiat ex porro eum!"
  },
  {
    title: "제목12 공지사항입니다.",
    date: "2022/02/08",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste architecto cum accusantium nesciunt tempore nisi rerum aspernatur quam numquam voluptates atque quas quisquam corrupti, necessitatibus ducimus! Deleniti, eligendi harum! Ipsa."
  }
];

export const NoticeContext = createContext();

export const Notice = () => {
  const [noticeList, setNoticeList] = useState(data);
  return (
    <Page>
      <NoticeContext.Provider value={noticeList}>
        <NoticeBoard data={noticeList} />
        <Routes>
          <Route path=":id" element={<NoticeDetail />} />
        </Routes>
      </NoticeContext.Provider>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(915 / 982) * 100 + "vh"};
  position: relative;
  background-color: #f5f5f5;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 0.223em;
  &::-webkit-scrollbar {
    display: none;
  }
`;
