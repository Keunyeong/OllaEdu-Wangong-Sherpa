import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { NavLogo, policeman, police } from "../assets";
import ReportList from "../elements/ReportList";
import MenuList from "../elements/MenuList";

const Nav = () => {
  const reportList = useRef();
  const [noticeClick, setNoticeClick] = useState(false);
  const [mypageClick, setMypageClick] = useState(false);
  const [reportClick, setReportClick] = useState(true);
  const [monthlyReportOn, setMonthlyReport] = useState(true);
  const [weeklyReportOn, setWeeklyReport] = useState(false);
  const [physicalReportOn, setPhysicalReport] = useState(false);
  const click = list => {
    if (list === "notice") {
      setNoticeClick(true);
      setMypageClick(false);
      setReportClick(false);
    } else if (list === "mypage") {
      setNoticeClick(false);
      setMypageClick(true);
      setReportClick(false);
    } else if (list === "report") {
      setNoticeClick(false);
      setMypageClick(false);
      setReportClick(true);
    }
  };
  const clickReport = list => {
    if (list === "monthly") {
      setMonthlyReport(true);
      setWeeklyReport(false);
      setPhysicalReport(false);
    } else if (list === "weekly") {
      setMonthlyReport(false);
      setWeeklyReport(true);
      setPhysicalReport(false);
    } else if (list === "physical") {
      setMonthlyReport(false);
      setWeeklyReport(false);
      setPhysicalReport(true);
    }
  };
  const handleResize = () => {
    console.log(
      `화면 사이즈 width: ${window.innerWidth} height: ${window.innerHeight}`
    );
  };
  useEffect(() => {
    if (reportClick) {
      reportList.current.style.height = `${(133 / 1512) * 100 + "vw"}`;
    } else {
      reportList.current.style.height = 0;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [reportClick]);
  const listOn = () => {};
  return (
    <Navbar>
      <img className="logo" src={NavLogo} alt="NAVLOGO" />
      <img className="job-logo" src={policeman} alt="POLICEMAN" />
      <img className="job" src={police} alt="POLICE" />
      <div className="menu">
        <MenuList
          list="notice"
          job="police"
          click={click}
          clickState={noticeClick}
        >
          공지사항
        </MenuList>
        <MenuList
          list="mypage"
          job="police"
          click={click}
          clickState={mypageClick}
        >
          마이페이지
        </MenuList>
        <MenuList
          list="report"
          job="police"
          click={click}
          clickState={reportClick}
        >
          성적 현황
        </MenuList>
        <div className="report-list" ref={reportList}>
          <ReportList
            list="monthly"
            job="police"
            click={clickReport}
            clickState={monthlyReportOn}
          >
            모의고사
          </ReportList>
          <ReportList
            list="weekly"
            job="police"
            click={clickReport}
            clickState={weeklyReportOn}
          >
            중간종합
          </ReportList>
          <ReportList
            list="physical"
            job="police"
            click={clickReport}
            clickState={physicalReportOn}
          >
            체력증감
          </ReportList>
        </div>
      </div>
      <div className="footer">
        <div className="d_day">
          D-<span>209</span>
        </div>
        <div className="test_date">
          <h4>최종 시험응시일</h4>
          <h5>
            <span>2022</span>년<span>5</span>월<span>22</span>일
          </h5>
        </div>
        <div className="phone">
          <img src="./src/assets/nav/phone.png" alt="" />
          <span>054-823-9112</span>
        </div>
      </div>
    </Navbar>
  );
};

const Navbar = styled.div`
  font-family: Noto Sans KR;
  position: relative;
  height: 100vh;
  width: ${(200 / 1512) * 100 + "vw"};
  background: #1482ef;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    width: ${(150 / 1512) * 100 + "vw"};
    margin-top: ${(20 / 982) * 100 + "vh"};
  }
  .job-logo {
    width: ${(72 / 1512) * 100 + "vw"};
    margin-top: ${(14 / 982) * 100 + "vh"};
  }
  .job {
    width: ${(26 / 1512) * 100 + "vw"};
    margin-top: ${(5 / 982) * 100 + "vh"};
  }
  .menu {
    display: flex;
    flex-direction: column;
    font-size: ${(20 / 1512) * 100 + "vw"};
    font-family: Noto Sans KR;
    font-weight: 600;
    margin-top: ${(134.67 / 982) * 100 + "vh"};
  }
  .report-list {
    display: flex;
    flex-direction: column;
    color: #ffffffc8;
    width: ${(200 / 1512) * 100 + "vw"};
    height: 0;
    overflow: hidden;
    transition: all 0.5s ease-out;
  }
  .footer {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffffc8;
    font-size: ${(14 / 1512) * 100 + "vw"};
    .d_day {
      background-color: #ffffffc8;
      color: #1482ef;
      font-weight: 600;
      font-size: ${(30 / 1512) * 100 + "vw"};
      line-height: ${(30 / 1512) * 100 + "vw"};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${(40 / 1512) * 100 + "vw"};
      width: ${(122 / 1512) * 100 + "vw"};
      height: ${(50 / 1512) * 100 + "vw"};
    }
    .test_date {
      margin-top: ${(14.5 / 1512) * 100 + "vw"};
      h4 {
        font-weight: 500;
        font-size: ${(12 / 1512) * 100 + "vw"};
        line-height: ${(17 / 1512) * 100 + "vw"};
        text-align: center;
      }
      h5 {
        font-weight: 500;
        font-size: ${(14 / 1512) * 100 + "vw"};
        line-height: ${(20 / 1512) * 100 + "vw"};
        margin-top: ${(5 / 1512) * 100 + "vw"};
        text-align: center;
      }
    }
    .phone {
      font-size: ${(16 / 1512) * 100 + "vw"};
      display: flex;
      align-items: center;
      justify-content: center;
      height: ${(59 / 1512) * 100 + "vw"};
      width: ${(200 / 1512) * 100 + "vw"};
      border-top: 1px solid #e8e8e8;
      margin-top: ${(30 / 1512) * 100 + "vw"};
      img {
        width: ${(20 / 1512) * 100 + "vw"};
        margin-right: ${(5 / 1512) * 100 + "vw"};
      }
    }
  }
`;

export default Nav;
