import React from "react";
import styled from "styled-components";

const Table = () => {
  return (
    <Tb>
      <thead>
        <Tr>
          <Th width="5.199rem">과목명</Th>
          <Th width="5.240rem">순위</Th>
          <Th width="6.906rem">전월점수</Th>
          <Th width="6.906rem">당월점수</Th>
          <Th width="2.763rem">증감</Th>
          <Th width="6.012rem">달성도</Th>
          <Th width="3.290rem">당월 목표</Th>
          <Th width="3.290rem">익월 목표</Th>
        </Tr>
      </thead>
      <tbody>
        <Tr>
          <Td width="5.199rem">TOTAL</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
        <Tr>
          <Td width="5.199rem">과목1</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
        <Tr>
          <Td width="5.199rem">과목2</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
        <Tr>
          <Td width="5.199rem">과목3</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
        <Tr>
          <Td width="5.199rem">과목4</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
        <Tr>
          <Td width="5.199rem">과목5</Td>
          <Td width="5.240rem">22</Td>
          <Td width="6.906rem">275</Td>
          <Td width="6.906rem">330</Td>
          <Td width="2.763rem">55</Td>
          <Td width="6.012rem">83%</Td>
          <Td width="3.290rem">400</Td>
          <Td width="3.290rem">400</Td>
        </Tr>
      </tbody>
    </Tb>
  );
};

export default Table;

const Tb = styled.table`
  font-size: 0.643rem;
  font-weight: 400;

  @media (max-width: 991px) {
    Th:nth-child(8) {
      display: none;
    }

    Td:nth-child(8) {
      display: none;
    }
  }

    Th:nth-child(7) {
      display: none;
    }

    Td:nth-child(7) {
      display: none;
    }
  }

    @media (max-width: 667px) {
       Th:nth-child(6) {
      display: none;
    }

    Td:nth-child(6) {
      display: none;
    }
  }

    Th:nth-child(5) {
      display: none;
    }

    Td:nth-child(5) {
      display: none;
    }

     @media (max-width: 449px) {
    Th:nth-child(3) {
      display: none;
    }

    Td:nth-child(3) {
      display: none;
    }
  }
  }
`;

const Tr = styled.tr`
  display: flex;
  border-bottom: 0.125em solid #e6e7e9;

  &:nth-child(odd) {
    background-color: #f5f5f5;
  }

  &:nth-child(even) {
    background-color: #fff;
  }
`;

const Th = styled.th`
  background-color: #6464a5;
  width: ${props => props.width};
  height: 2.2em;
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
