import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { arc } from "d3";
import * as d3 from "d3";

const rem = Number(
  window
    .getComputedStyle(document.querySelector("html"), null)
    .fontSize.replace("px", "")
);

const 만점 = 500;
const 학생총점 = 275;
const 목표점수 = 195;
const 학생등급 = 학생총점 / 만점;
const 목표등급 = 목표점수 / 만점;

const scores = {
  studentScore: 학생총점,
  studentGrade: 학생등급,
  targetGrade: 목표등급
};

const TotalGraph = () => {
  const arcChart = useRef();
  const [data, setData] = useState(scores);
  useEffect(() => {
    const outerArc = arc()
      .innerRadius(5.375 * rem)
      .outerRadius(6.03125 * rem)
      .startAngle(0)
      .cornerRadius(50);

    const innerArc = arc()
      .innerRadius(3.727 * rem)
      .outerRadius(4.516 * rem)
      .startAngle(0)
      .cornerRadius(50);

    const svg = d3
      .select(arcChart.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .append("g")
      .attr("transform", `translate(${296 / 2},${208 / 2})`);

    const numberDOM = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-weight", 700)
      .attr("font-size", "2.055em");

    const backgroundArc = svg
      .append("path")
      .datum({ endAngle: 2 * Math.PI })
      .style("fill", "#F5F5F5")
      .attr("d", outerArc);

    const targetChart = svg
      .append("path")
      .datum({ endAngle: -2 * Math.PI * data.targetGrade })
      .style("fill", "#214BA7")
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
    <GraphContainer ref={arcChart} width="100%" height="100%"></GraphContainer>
  );
};

export default TotalGraph;

const GraphContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

const Index = styled.div`
  width: 4.676rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 1.731rem;
`;

const Span = styled.span`
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
