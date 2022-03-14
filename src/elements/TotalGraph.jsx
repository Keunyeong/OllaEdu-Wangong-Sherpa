import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { arc } from "d3";
import * as d3 from "d3";

const TotalGraph = ({ width = 296, grade }) => {
  const 만점 = 300;
  const 학생총점 = grade["당월점수"];
  const 목표점수 = grade["당월목표"];
  const 학생등급 = 학생총점 / 만점;
  const 목표등급 = 목표점수 / 만점;

  const scores = {
    studentScore: 학생총점,
    studentGrade: 학생등급,
    targetGrade: 목표등급
  };

  const arcChart = useRef();
  const [data, setData] = useState(scores);
  useEffect(() => {
    const outerArc = arc()
      .innerRadius(0.225 * width)
      .outerRadius(0.252 * width)
      .startAngle(0)
      .cornerRadius(50);

    const innerArc = arc()
      .innerRadius(0.156 * width)
      .outerRadius(0.189 * width)
      .startAngle(0)
      .cornerRadius(50);

    const svg = d3
      .select(arcChart.current)
      .append("svg")
      .attr("width", 0.504 * width)
      .attr("height", 0.504 * width)
      .append("g")
      .attr("transform", `translate(${0.252 * width}, ${0.252 * width})`);

    const numberDOM = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-weight", 700)
      .attr("font-size", "1.59em");

    const backgroundArc = svg
      .append("path")
      .datum({ endAngle: 2 * Math.PI })
      .style("fill", "#F5F5F5")
      .attr("d", outerArc);

    const targetChart = svg
      .append("path")
      .datum({ endAngle: -2 * Math.PI * data.targetGrade })
      .style("fill", "#7C5EF1")
      .transition()
      .duration(750)
      .attrTween("d", function (d) {
        const iChart = d3.interpolate({ endAngle: 0 }, d);
        return function (t) {
          return outerArc(iChart(t));
        };
      });

    const studentChart = svg
      .append("path")
      .datum({ endAngle: -2 * Math.PI * data.studentGrade })
      .style("fill", "#F8AB0D")
      .transition()
      .duration(750)
      .attrTween("d", function (d) {
        const iChart = d3.interpolate({ endAngle: 0 }, d);
        const iText = d3.interpolate(0, data.studentScore);
        return function (t) {
          numberDOM.text(d3.format(",d")(iText(t)));
          return innerArc(iChart(t));
        };
      });
  }, []);

  return (
    <GraphContainer ref={arcChart} width="100%" height="100%">
      <Index>
        <Span>
          <Svg>
            <SmallCircle fill="#7C5EF1" />
          </Svg>
          목표 점수
        </Span>
        <Span>
          <Svg>
            <SmallCircle fill="#F8AB0D" />
          </Svg>
          당월 점수
        </Span>
      </Index>
    </GraphContainer>
  );
};

export default TotalGraph;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const Index = styled.div`
  width: 57.55px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 1.68rem;
`;
const Span = styled.span`
  display: flex;
  height: 20px;
  justify-content: space-between;
  align-items: center;
`;

const Svg = styled.svg`
  width: 7.74px;
  height: 7.74px;
`;

const SmallCircle = styled.circle`
  cx: 3.87px;
  cy: 3.87px;
  r: 3.87px;
`;
