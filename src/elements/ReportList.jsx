import styled from "styled-components";
import { useEffect, useRef } from "react";

const ReportList = ({ children, list, job, click, clickState }) => {
  const reportList = useRef();
  const upperList = list.toUpperCase();
  const src = `./src/assets/nav/${list}_reportIcon.png`;
  const src_job = `./src/assets/nav/${list}_reportIcon_${job}.png`;
  useEffect(() => {
    if (clickState) {
      reportList.current.style.background = "#fff";
      if (job === "police") {
        reportList.current.style.color = "#1482ef";
      } else if (job === "fire") {
        reportList.current.style.color = "#F48065";
      } else if (job === "admin") {
        reportList.current.style.color = "#13C383";
      }
    } else {
      if (job === "police") {
        reportList.current.style.background = "#1482ef";
      } else if (job === "fire") {
        reportList.current.style.background = "#F48065";
      } else if (job === "admin") {
        reportList.current.style.background = "#13C383";
      }
      reportList.current.style.color = "#fff";
    }
  }, [clickState, job]);
  return (
    <List
      ref={reportList}
      onClick={() => {
        click(list);
      }}
      depart={job}
    >
      {!clickState ? (
        <img src={src} alt={`${upperList}`} />
      ) : (
        <img src={src_job} alt={`${upperList}`} />
      )}
      {children}
      {list === "report" &&
        (!clickState ? (
          <img
            className="arrow arrow_down"
            src="./src/assets/nav/arrow_down.png"
            alt="ARROWDOWN"
          />
        ) : (
          <img
            className="arrow arrow_down"
            src={`./src/assets/nav/arrow_down_${job}.png`}
            alt="ARROWDOWN"
          />
        ))}
    </List>
  );
};

const List = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: ${(16 / 1512) * 100 + "vw"};
  line-height: ${(19 / 1512) * 100 + "vw"};
  height: ${(41 / 1512) * 100 + "vw"};
  margin-top: ${(5 / 1512) * 100 + "vw"};
  padding-left: ${(40 / 1512) * 100 + "vw"};
  cursor: pointer;
  img {
    width: ${(25 / 1512) * 100 + "vw"};
    margin-right: ${(10 / 1512) * 100 + "vw"};
  }
`;

export default ReportList;
