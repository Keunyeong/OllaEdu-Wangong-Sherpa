import React from "react";
import styled from "styled-components";

const Table = () => {
  return (
    <Tb>
      <thead>
        <Tr>
          <Th width="6.688em">과목명</Th>
          <Th width="6.688em">순위</Th>
          <Th width="8.875em">전월점수</Th>
          <Th width="8.875em">당월점수</Th>
          <Th width="3.563em">증감</Th>
          <Th width="7.750em">달성도</Th>
          <Th width="4.250em">당월 목표</Th>
          <Th width="4.250em">익월 목표</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td width="6.688em">TOTAL</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
        <Tr>
          <Td width="6.688em">과목1</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
        <Tr>
          <Td width="6.688em">과목2</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
        <Tr>
          <Td width="6.688em">과목3</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
        <Tr>
          <Td width="6.688em">과목4</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
        <Tr>
          <Td width="6.688em">과목5</Td>
          <Td width="6.688em">22</Td>
          <Td width="8.875em">275</Td>
          <Td width="8.875em">330</Td>
          <Td width="3.563em">55</Td>
          <Td width="7.750em">83%</Td>
          <Td width="4.250em">400</Td>
          <Td width="4.250em">400</Td>
        </Tr>
      </tbody>
    </Tb>
  );
};

export default Table;

const Tb = styled.table`
  font-size: 0.875em;
  font-weight: 400;
`;

const Tr = styled.tr`
  display: flex;
  border-bottom: 0.125em solid #e6e7e9;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

const Th = styled.th`
  background-color: #9498ef;
  width: ${props => props.width};
  height: 2.625em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0.375em 0.813em;
  white-space: nowrap;
`;

const Td = styled.td`
  width: ${props => props.width};
  height: 2.625em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
