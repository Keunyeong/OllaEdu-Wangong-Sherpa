import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  { subject: "행정학", score: 100 },
  { subject: "한국사", score: 100 },
  { subject: "국어", score: 100 },
  { subject: "영어", score: 40 },
  { subject: "행정법", score: 100 }
];

const color = "#F48065";

const IrregularPieChart = ({ width = 296, height = 208 }) => {
  const chart = useRef();
  useEffect(() => {
    data.sort((a, b) => b.score - a.score);

    const pieData = d3.pie().value(1);
    const scale = d3.scaleLinear().domain([0, 100]).range([0, 92]);
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
      .transition()
      .duration(1000)
      .attrTween("d", d => {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return t => {
          d.endAngle = i(t);
          return arc
            .outerRadius(scale(d.data.score))
            .startAngle(d.startAngle + Math.PI / 2)
            .endAngle(d.endAngle + Math.PI / 2)();
        };
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

        return "translate(" + center[0] * 1.8 + "," + center[1] * 1.8 + ")";
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "0.750em")
      .attr("alignment-baseline", "middle")
      .attr("font-weight", 500)
      .transition()
      .duration(1000)
      .attr("opacity", 1)
      .text(d => {
        if (d.data.score === 0) {
          return null;
        }
        return d.data.subject;
      });
  }, []);

  return (
    <svg
      ref={chart}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMin meet"
    ></svg>
  );
};

export default IrregularPieChart;
