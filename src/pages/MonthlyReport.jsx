import React, { useContext, useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import styled from "styled-components";
import { Context } from "../context/Context";
import {
  Table,
  IrregularPieGraph,
  MonthlyGraph,
  GrowthGraph,
  TotalGraph,
  SkeletonCircle,
  SkeletonBar
} from "../elements";
import { CardWrapper, Dropdown } from "../components";
import { RankList } from "../containers";
import Sliders from "../components/slider/Slider";
import { Cloud } from "../assets";

const options = {};

const MonthlyReport = () => {
  const pdfRef = useRef();
  const [current, setCurrent] = useState({});
  const { data, isLoading } = useContext(Context);
  const { 응시월, 응시내역, 년월, 년 } = data;
  const location = useLocation().pathname.split("/")[2];

  useEffect(() => {
    if (data.length !== 0) {
      setCurrent({});
    }
  }, [data]);

  return (
    <Page>
      <Section ref={pdfRef}>
        <Title>모의고사 분석</Title>
        {data.length !== 0 ? (
          <DropdownContainer>
            <DropdownWrapper>
              <Dropdown arr={년} />
              <DropdownLabel>년</DropdownLabel>
            </DropdownWrapper>
            <DropdownWrapper>
              <Dropdown />
              <DropdownLabel>월</DropdownLabel>
            </DropdownWrapper>
            <ReactToPdf
              targetRef={pdfRef}
              filename="div-blue.pdf"
              options={options}
              x={5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <CloudIcon src={Cloud} alt="download pdf" onClick={toPdf} />
              )}
            </ReactToPdf>
          </DropdownContainer>
        ) : null}

        <Wrapper>
          <Swap1>
            <CardWrapper
              title="정규 모의고사 총점"
              children={isLoading ? <SkeletonCircle /> : <TotalGraph />}
            />
          </Swap1>
          <Swap2>
            <CardWrapper
              title="과목별 추이"
              children={isLoading ? <SkeletonBar /> : <Sliders />}
            />
          </Swap2>
          <Swap3>
            <CardWrapper
              title="순위"
              children={isLoading ? <SkeletonBar /> : <RankList />}
            />
          </Swap3>
          <Swap4>
            <CardWrapper
              width="38.500em"
              height="13.000em"
              title="총점 월별 추이"
              children={isLoading ? <SkeletonBar /> : <MonthlyGraph />}
            />
          </Swap4>
          <Swap5>
            <CardWrapper
              title="과목별 균형"
              children={isLoading ? <SkeletonCircle /> : <IrregularPieGraph />}
            />
          </Swap5>
          <Swap6>
            <CardWrapper
              width="100%"
              height="100%"
              padding="1.938em 0.625em"
              title="상세 점수 조회"
              children={
                isLoading ? (
                  <SkeletonBar />
                ) : (
                  <CombineChart>
                    <Table />
                    <LittleChartContainer>
                      <IrregularPieGraph />
                    </LittleChartContainer>
                  </CombineChart>
                )
              }
            />
          </Swap6>
          <Swap7>
            <CardWrapper
              width="100%"
              title="시험 총평/강사 코멘트"
              padding="2.5em 2.5em 4.375em 2.5em"
              children={
                isLoading ? (
                  <SkeletonBar />
                ) : (
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Congue nascetur turpis netus justo. Eleifend eget mattis
                    ipsum neque, lorem donec dignissim. Quis adipiscing
                    ullamcorper arcu elit. Platea fames massa eu condimentum
                    nulla. Hac commodo, duis odio velit accumsan nibh quam
                    suscipit proin. Proin amet enim metus rhoncus nisl. Non
                    fermentum tellus vel sagittis elementum tristique porttitor.
                    Vitae, adipiscing a pellentesque massa, ultricies. Mauris
                    sit felis dui amet, sociis porttitor pharetra. Lectus quam
                    libero sit facilisi praesent pharetra. Sed semper
                    ullamcorper tempus dolor. Vel mauris vulputate quis massa
                    rhoncus, amet, nunc. Amet dolor morbi ut eu netus sed tortor
                    vulputate eget. In montes, amet mauris commodo viverra. Est
                    dolor ultrices nulla at donec faucibus quis sagittis. Etiam
                    vulputate magna enim pellentesque sodales nisi, pulvinar
                    posuere nunc. Leo, ultricies arcu vitae volutpat id. Neque
                    in enim tristique eget. Auctor eu ac, aliquet
                  </Paragraph>
                )
              }
            />
          </Swap7>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default MonthlyReport;

const Page = styled.div`
  padding: 1.5em;
  margin: -1.5em;
  height: ${(915 / 982) * 100 + "vh"};
  position: relative;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 0.223em;
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: border-box;

  @media (max-width: 667px) {
    padding: 32px;
  }
`;

const Section = styled.section`
  width: 58.5em;
  position: relative;
  padding: 4.5em 0 0 0;

  @media (max-width: 991px) {
    width: 38.5em;
  }

  @media (max-width: 667px) {
    width: auto;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 32px;
  right: 0;
  width: 22.188em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownLabel = styled.span`
  font-size: 1.125em;
  font-weight: 500;
  line-height: 1.625em;
  margin-left: 0.213em;
`;

const CloudIcon = styled.img`
  width: 2.875em;
  height: 1.625em;
`;

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 0 1em 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5em;
  row-gap: 1.375em;
  grid-template-areas:
    "swap1 swap2 swap3"
    "swap4 swap4 swap5"
    "swap6 swap6 swap6"
    "swap7 swap7 swap7";

  @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
  }
`;

const CombineChart = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 0.476em;
  row-gap: 2.5em;
`;

const LittleChartContainer = styled.div`
  width: 18.5em;
  height: 13em;

  @media (max-width: 991px) {
    display: none;
  }
`;

const Paragraph = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  max-height: 8.25rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Swap1 = styled.div`
  grid-area: swap1;

  @media (max-width: 991px) {
    order: 1;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap2 = styled.div`
  grid-area: swap2;

  @media (max-width: 991px) {
    order: 2;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
const Swap3 = styled.div`
  grid-area: swap3;

  @media (max-width: 991px) {
    order: 3;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap4 = styled.div`
  grid-column: 1/3;
  grid-area: swap4;

  @media (max-width: 991px) {
    order: 5;
    overflow: scroll;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap5 = styled.div`
  grid-column: 3/4;
  grid-area: swap5;

  @media (max-width: 991px) {
    order: 4;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap6 = styled.div`
  grid-column: 1/4;
  grid-area: swap6;

  @media (max-width: 991px) {
    order: 6;
    flex: 1;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap7 = styled.div`
  grid-column: 1/4;
  grid-area: swap7;

  @media (max-width: 991px) {
    order: 7;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
