import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      <span>
        © 2022. 에듀해시글로벌파트너스㈜ 안동지사. All rights reserved.
      </span>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100vw;
  height: 3rem;
  background-color: #032164;
  color: #ffcb60;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
`;
