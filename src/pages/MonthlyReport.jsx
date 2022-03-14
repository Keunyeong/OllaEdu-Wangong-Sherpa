import React, { useContext, useState, useRef, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import styled from "styled-components";
import { Context } from "../context/Context";
import {
  Table,
  IrregularPieGraph,
  MonthlyGraph,
  TotalGraph,
  SkeletonCircle,
  SkeletonBar
} from "../elements";
import { CardWrapper, Dropdown } from "../components";
import { RankList } from "../containers";
import Sliders from "../components/slider/Slider";
import { PDFIcon } from "../assets";
import Light from "../elements/Light";

const options = {};

const MonthlyReport = () => {
  const pdfRef = useRef();
  const [grade, setGrade] = useState([]);
  const { data, isLoading } = useContext(Context);
  const location = useLocation().pathname.split("/")[2];
  const { 응시월, 응시내역, 년월, 년 } = data;

  const title = useMemo(() => {
    if (location === "monthly") return "모의고사";

    if (location === "middle") return "중간종합";

    if (location === "physical") return "체력증감";
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      let category;
      if (title === "모의고사") {
        category = "정규 모의고사";
      } else if (title === "중간종합") {
        category = "중간종합 TEST (평균)";
      } else {
        category = "체력측정 결과";
      }
      setGrade(응시내역[응시월[응시월.length - 1]][category]);
    }
  }, [data, location]);

  return (
    <Page>
      <Section ref={pdfRef}>
        <Light
          top={0}
          left={3}
          highLightWidth={15.8}
          highLightWidth2={16.8}
          highLightTop={8}
          highLightTop2={10.7}
        />
        <Title>
          {title}&nbsp;
          <Span>분석</Span>
        </Title>
        {data.length !== 0 ? (
          <DropdownContainer>
            <DropdownWrapper margin="20px">
              <Dropdown arr={응시월} />
            </DropdownWrapper>
            <ReactToPdf
              targetRef={pdfRef}
              filename="div-blue.pdf"
              options={options}
              x={5}
              scale={0.8}
            >
              {({ toPdf }) => (
                <CloudIcon src={PDFIcon} alt="download pdf" onClick={toPdf} />
              )}
            </ReactToPdf>
          </DropdownContainer>
        ) : null}

        <Wrapper>
          <Swap1>
            <CardWrapper
              width="100%"
              height="100%"
              title="정규 모의고사 총점"
              children={
                isLoading || !grade.length ? (
                  <SkeletonCircle />
                ) : (
                  <TotalGraph grade={grade[0]} />
                )
              }
            />
          </Swap1>
          <Swap2>
            <CardWrapper
              width="100%"
              title="과목별 추이"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <>
                    <Sliders grade={grade} />
                  </>
                )
              }
            />
          </Swap2>
          <Swap3>
            <CardWrapper
              width="100%"
              title="순위"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <RankList grade={grade} />
                )
              }
            />
          </Swap3>
          <Swap4>
            <CardWrapper
              width="100%"
              title="과목별 균형"
              children={
                isLoading || !grade.length ? (
                  <SkeletonCircle />
                ) : (
                  <IrregularPieGraph grade={grade} />
                )
              }
            ></CardWrapper>
          </Swap4>
          <Swap5>
            <CardWrapper
              width="100%"
              padding="28px 26px"
              title="상세 점수 조회"
              children={
                isLoading || !grade.length ? (
                  <SkeletonBar />
                ) : (
                  <Table grade={grade} />
                )
              }
            />
          </Swap5>
          <Swap6>
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
          </Swap6>
        </Wrapper>
      </Section>
    </Page>
  );
};

export default MonthlyReport;

const Page = styled.div`
  width: auto;
  height: ${(915 / 982) * 100 + "vh"};
  position: relative;
  box-sizing: border-box;

  @media (max-width: 991px) {
    padding: 0 16px;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Section = styled.section`
  position: relative;
  width: 58.5em;

  @media (max-width: 991px) {
    width: auto;
  }

  @media (max-width: 667px) {
    width: auto;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  align-items: center;
`;

const CloudIcon = styled.img`
  width: 2.875em;
  height: 1.625em;
`;

const DropdownWrapper = styled.div`
  width: 72px;
  display: flex;
  align-items: center;
  margin-right: ${props => props.margin};
`;

const Title = styled.h1`
  width: 234px;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: 77px 0 1em 11px;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5em;
  row-gap: 1.375em;
  grid-template-areas:
    "swap1 swap1 swap1"
    "swap2 swap3 swap4"
    "swap5 swap5 swap5"
    "swap6 swap6 swap6";

  @media (max-width: 991px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.063em;
    grid-template-areas:
      "swap1 swap1 swap1 swap1"
      "swap4 swap4 swap3 swap3"
      "swap2 swap2 swap2 swap2"
      "swap5 swap5 swap5 swap5"
      "swap6 swap6 swap6 swap6";
  }

  @media (max-width: 667px) {
    display: flex;
    flex-direction: column;
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
    order: 4;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
const Swap3 = styled.div`
  grid-area: swap3;

  @media (max-width: 991px) {
    order: 2;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap4 = styled.div`
  grid-area: swap4;

  @media (max-width: 991px) {
    order: 3;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap5 = styled.div`
  grid-area: swap5;

  @media (max-width: 991px) {
    order: 5;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;

const Swap6 = styled.div`
  grid-area: swap6;

  @media (max-width: 991px) {
    order: 6;
    flex: 1;
  }

  @media (max-width: 667px) {
    width: 100%;
  }
`;
