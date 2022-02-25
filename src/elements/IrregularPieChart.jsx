import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { scaleLinear } from "d3";

const data = [
  { subject: "행정학", score: 60 },
  { subject: "한국사", score: 80 },
  { subject: "국어", score: 90 },
  { subject: "영어", score: 10 },
  { subject: "행정법", score: 100 }
];

const width = 384;
const height = 272;
const color = "#F48065";

const IrregularPieChart = () => {
  const chart = useRef();
  useEffect(() => {
    data.sort((a, b) => b.score - a.score);

    const pieData = d3.pie().value(1);
    const scale = d3.scaleLinear().domain([0, 100]).range([59.17, 118.34]);
    const arc = d3.arc().innerRadius(0);

    const svg = d3
      .select(chart.current)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2 - 4}) `);

    svg
      .append("g")
      .selectAll("path")
      .data(pieData(data))
      .join("path")
      .attr("d", (d, i) => {
        return arc
          .outerRadius(scale(d.data.score))
          .startAngle(d.startAngle + Math.PI / 2)
          .endAngle(d.endAngle + Math.PI / 2)();
      })
      .attr("fill", color)
      .attr("stroke", "#fff")
      .attr("stroke-width", "0.125em")
      .attr("opacity", (d, i) => 1 - 0.2 * i);

    svg
      .selectAll("text")
      .data(pieData(data))
      .join("text")
      .attr("transform", function (d, i) {
        const center = arc
          .outerRadius(scale(d.data.score))
          .startAngle(d.startAngle + Math.PI / 2)
          .endAngle(d.endAngle + Math.PI / 2)
          .centroid(d);

        if (i === 0) {
          center[0] = center[0] * 2.4;
          center[1] = center[1] * 2.4;
        } else if (i === 3) {
          center[0] = center[0] * 2.1;
          center[1] = center[1] * 2.1;
        } else {
          center[0] = center[0] * 2.3;
          center[1] = center[1] * 2.3;
        }
        return `translate(${center})`;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.750em")
      .attr("font-weight", 500)
      .text(d => {
        return d.data.subject;
      });
  }, []);

  return (
    <svg
      ref={chart}
      width="100%"
      height="100%"
      viewBox={`0 0 ${width} ${height}`}
    ></svg>
  );
};

export default IrregularPieChart;
