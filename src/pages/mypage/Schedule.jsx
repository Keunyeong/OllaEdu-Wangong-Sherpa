import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Toolbar from "../../elements/Toolbar";

import "react-big-calendar/lib/css/react-big-calendar.css";

const Schedule = () => {
  moment.locale("ko-KR");
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(1, "days").toDate(),
      title: "Some title"
    }
  ];
  return (
    <>
      <MypageSection
        title="시간표"
        subtitle="시험 및 이벤트 일정을 확인하세요."
      >
        <Cal
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          components={{
            toolbar: Toolbar
          }}
        />
      </MypageSection>
    </>
  );
};

const Cal = styled(Calendar)`
  height: ${(476 / 1512) * 100 + "vw"};
  width: ${(919 / 1512) * 100 + "vw"};
  @media screen and (max-width: 668px) {
    height: 31.25rem;
    width: 20rem;
  }
  .rbc-month-view {
    .rbc-month-header {
      background-color: #dfe0ff;
    }
  }
`;

export default Schedule;
