import React from "react";
import styled from "styled-components";
import {
  ProgressBar,
  Table,
  IrregularPieGraph,
  MonthlyGraph,
  GrowthGraph,
  TotalGraph
} from "../elements";
import { CardWrapper, Dropdown } from "../components";

const MonthlyReport = () => {
<<<<<<< HEAD
  return <div>REPORTMAIN</div>;
=======
  return (
    <Page>
      <Title>모의고사 분석</Title>
      <Wrapper>
        {" "}
        <CardWrapper title="정규 모의고사 총점" children={<TotalGraph />} />
        <CardWrapper title="순위" children={<GrowthGraph />} />
        <CardWrapper title="과목별 추이" children={<GrowthGraph />} />
        <CardWrapper
          width="49.5em"
          height="17em"
          title="총점 월별 추이"
          children={<MonthlyGraph />}
        />
        <CardWrapper title="과목별 균형" children={<IrregularPieGraph />} />
        <CardWrapper
          max="100%"
          width="100%"
          height="auto"
          title="상세 점수 조회"
          padding="4.000em 2.500em 2.750em 2.500em"
          children={
            <>
              <Table />
              <IrregularPieGraph />
            </>
          }
        />
        <CardWrapper
          max="100%"
          width="100%"
          title="시험 총평/강사 코멘트"
          padding="2.500em 2.500em 4.375em 2.500em"
          children={
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              nascetur turpis netus justo. Eleifend eget mattis ipsum neque,
              lorem donec dignissim. Quis adipiscing ullamcorper arcu elit.
              Platea fames massa eu condimentum nulla. Hac commodo, duis odio
              velit accumsan nibh quam suscipit proin. Proin amet enim metus
              rhoncus nisl. Non fermentum tellus vel sagittis elementum
              tristique porttitor. Vitae, adipiscing a pellentesque massa,
              ultricies. Mauris sit felis dui amet, sociis porttitor pharetra.
              Lectus quam libero sit facilisi praesent pharetra. Sed semper
              ullamcorper tempus dolor. Vel mauris vulputate quis massa rhoncus,
              amet, nunc. Amet dolor morbi ut eu netus sed tortor vulputate
              eget. In montes, amet mauris commodo viverra. Est dolor ultrices
              nulla at donec faucibus quis sagittis. Etiam vulputate magna enim
              pellentesque sodales nisi, pulvinar posuere nunc. Leo, ultricies
              arcu vitae volutpat id. Neque in enim tristique eget. Auctor eu
              ac, aliquet{" "}
            </Paragraph>
          }
        />
      </Wrapper>
    </Page>
  );
>>>>>>> feature/MainPage
};

export default MonthlyReport;

const Page = styled.section`
  position: relative;
  max-width: 82em;
  max-height: 915px;
  padding: 0 3.5em;
  height: calc(100vh-3.063em);
  background-color: #f5f5f5;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 0.223em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.h1`
  margin: 2.938em 0 2.5em 0;
  font-size: 2.5em;
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.5em;
  row-gap: 2.5em;
`;

const Paragraph = styled.p`
  font-size: 0.75em;
  font-weight: 500;
`;
