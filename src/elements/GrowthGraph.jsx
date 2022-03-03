import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import styled from "styled-components";

let subject;
let lastMonth;
let thisMonth;
const scoreArr = [(subject = "헌법"), (lastMonth = 72), (thisMonth = 84)];

const GrowthGraph = () => {
  const score = useRef();
  const scoreText = useRef();
  const [data, setData] = useState(scoreArr);
  const width = 130;
  const height = 110;

  useEffect(() => {
    const svg = d3
      .select(score.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        return i * 40 - 10;
      })
      .attr("y", (d, i) => {
        if (i === 0) return null;
        else return height - d + 5;
      })
      .attr("width", "1.3rem")
      .attr("height", (d, i) => {
        if (i === 0) return null;
        else return d;
      })
      .attr("fill", (d, i) => {
        if (i < scoreArr.length - 1) {
          return "#D8D8D8";
        } else {
          return "#F8AB0D";
        }
      });

    const scoreTexts = d3
      .select(scoreText.current)
      .append("svg")
      .attr("width", width)
      .attr("height", 20);

    scoreTexts
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * 40 - 4;
      })
      .attr("y", d => {
        return 10;
      })
      .attr("font-size","0.6rem")
      .text((d, i) => {
        if (i === 0) {
          return null;
        } else {
          return d;
        }
      });
  }, [data]);

  return (
    <RankCard>
      <ChartBox>
        <Chart ref={score}></Chart>
        <Text ref={scoreText}></Text>
      </ChartBox>

      <SpanBox>
        <SubjectSpan>{data[0]}</SubjectSpan>
        <Span>
          <Svg>
            <SmallCircle fill="#D8D8D8" />
          </Svg>
          전월 점수
        </Span>
        <Span>
          <Svg>
            <SmallCircle fill="#F8AB0D" />
          </Svg>
          당월 점수
        </Span>
      </SpanBox>
    </RankCard>
  );
};

const RankCard = styled.div`
  display: flex;
  svg {
    display: block;
    font-size: 0.4rem;
    rect {
      ry: 0.3rem;
    }
  }
`;

const ChartBox = styled.div`
  margin-right: 1.6rem;
`;

const SpanBox = styled.div`
  width: 4.676rem;
  box-sizing: border-box;
  padding-top: 30px;
`;

const Chart = styled.div`
  svg {
    display: block;
    font-size: 0.4rem;
    rect {
      ry: 0.3rem;
    }
  }
`;

const Text = styled.div`
  font-weight: bold;
  svg {
    border-top: 1px solid #000;
  }
`;

const SubjectSpan = styled.span`
  font-weight: 700;
  line-height: 203%;
`;

const Span = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  height: 1.5625rem;
  justify-content: space-between;
  align-items: center;
`;

const Svg = styled.svg`
  width: 0.625rem;
  height: 0.625rem;
`;

const SmallCircle = styled.circle`
  cx: 0.3125rem;
  cy: 0.3125rem;
  r: 0.3125rem;
`;

export default GrowthGraph;
