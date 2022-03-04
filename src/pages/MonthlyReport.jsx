import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/Context";
import {
  ProgressBar,
  Table,
  IrregularPieGraph,
  MonthlyGraph,
  GrowthGraph,
  TotalGraph
} from "../elements";
import { CardWrapper, Dropdown } from "../components";
import { Cloud } from "../assets";

const MonthlyReport = () => {
  const { data } = useContext(Context);

  return (
    <Page>
      <Title>모의고사 분석</Title>
      <DropdownContainer>
        <DropdownWrapper>
          <Dropdown />
          <DropdownLabel>년</DropdownLabel>
        </DropdownWrapper>
        <DropdownWrapper>
          <Dropdown />
          <DropdownLabel>월</DropdownLabel>
        </DropdownWrapper>
        <CloudIcon src={Cloud} alt="download pdf" />
      </DropdownContainer>
      <Wrapper>
        <Swap1>
          <CardWrapper title="정규 모의고사 총점" children={<TotalGraph />} />
        </Swap1>

        <Swap2>
          <CardWrapper title="순위" children={<GrowthGraph />} />
        </Swap2>
        <Swap3>
          <CardWrapper title="과목별 추이" children={<GrowthGraph />} />
        </Swap3>
        <Swap4>
          <CardWrapper
            width="49.5em"
            height="17em"
            title="총점 월별 추이"
            children={<MonthlyGraph />}
          />
        </Swap4>
        <Swap5>
          <CardWrapper title="과목별 균형" children={<IrregularPieGraph />} />
        </Swap5>
        <Swap6>
          <CardWrapper
            max="100%"
            width="100%"
            height="100%"
            padding="4em 0.875em 2.7em 2.5em"
            title="상세 점수 조회"
            children={
              <CombineChart>
                <Table />
                <IrregularPieGraph />
              </CombineChart>
            }
          />
        </Swap6>
        <Swap7>
          <CardWrapper
            max="100%"
            width="100%"
            title="시험 총평/강사 코멘트"
            padding="2.5em 2.5em 4.375em 2.5em"
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
                ullamcorper tempus dolor. Vel mauris vulputate quis massa
                rhoncus, amet, nunc. Amet dolor morbi ut eu netus sed tortor
                vulputate eget. In montes, amet mauris commodo viverra. Est
                dolor ultrices nulla at donec faucibus quis sagittis. Etiam
                vulputate magna enim pellentesque sodales nisi, pulvinar posuere
                nunc. Leo, ultricies arcu vitae volutpat id. Neque in enim
                tristique eget. Auctor eu ac, aliquet
              </Paragraph>
            }
          />
        </Swap7>
      </Wrapper>
    </Page>
  );
};

export default MonthlyReport;

const Page = styled.section`
  width: ${(1412 / 1512) * 100 + "vw"};
  height: ${(915 / 982) * 100 + "vh"};
  position: relative;
  padding: 0 3.5em 2.938em 3.5em;
  background-color: #f5f5f5;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 0.223em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 2em;
  right: 3.813em;
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
`;

const Title = styled.h1`
  margin: 5.438rem 0 2.5rem 0;
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

const CombineChart = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 2.5em;
  row-gap: 2.5em;
  @media only screen and (min-width: 1512px) {
    flex-wrap: nowrap;
  } ;
`;

const Paragraph = styled.p`
  font-size: 0.75em;
  font-weight: 500;
`;

const Swap1 = styled.div`
  flex: 1/3;
  @media only screen and (max-width: 1511px) {
    order: 1;
  } ;
`;

const Swap2 = styled.div`
  flex: 1/3;
  @media only screen and (max-width: 1511px) {
    order: 2;
  } ;
`;
const Swap3 = styled.div`
  flex: 1/3;
  @media only screen and (max-width: 1511px) {
    order: 3;
  } ;
`;

const Swap4 = styled.div`
  @media only screen and (max-width: 1511px) {
    order: 5;
  } ;
`;

const Swap5 = styled.div`
  @media only screen and (max-width: 1511px) {
    order: 4;
  } ;
`;

const Swap6 = styled.div`
  width: 75em;
  @media only screen and (max-width: 1511px) {
    order: 6;
  } ;
`;

const Swap7 = styled.div`
  width: 75em;
  @media only screen and (max-width: 1511px) {
    order: 7;
  } ;
`;
