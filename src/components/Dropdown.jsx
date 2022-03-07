import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Dropdown_up, Dropdown_down } from "../assets";

const month = Array.from({ length: 12 }, (value, index) => 1 + index);

const Dropdown = ({ arr = month }) => {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  return (
    <Wrapper ref={ref}>
      <ListHeader
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <ListTitle>2021</ListTitle>
        {toggle ? (
          <Icon src={Dropdown_up} alt="dropdown-up" />
        ) : (
          <Icon src={Dropdown_down} alt="dropdown-down" />
        )}
        {toggle && (
          <ListConatiner>
            {arr.map((yr, idx) => (
              <List key={yr}>{yr}</List>
            ))}
          </ListConatiner>
        )}
      </ListHeader>
    </Wrapper>
  );
};

export default Dropdown;

const Wrapper = styled.div`
  font-weight: 500;
  line-height: 1.646em;
`;

const ListHeader = styled.div`
  position: relative;
  width: 6.633em;
  min-height: 1.25em;
  background-color: #d8d8d8;
  border-radius: 0.223em;
`;

const ListTitle = styled.span`
  display: inline-block;
  width: 4.813em;
  text-align: right;
`;

const Icon = styled.img`
  position: absolute;
  top: 0.134em;
  right: 0.048em;
  width: 1.421em;
  height: 1.421em;
`;

const ListConatiner = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.813em;
  max-height: 12.25em;
  background-color: #d8d8d8;
  overflow-y: auto;
  border-radius: 0.223em;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const List = styled.li`
  text-align: center;
`;
