import styled from "styled-components";

export default function NoticeSection() {
  return (
    <Section>123</Section>
  );
}

const Section = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  width: 83%;
  height: ${(782 / 982) * 100 + "vh"};
  border-radius: 0 20px 20px 0;
  border-left: 1px solid #D8D8D8;
  background-color: #F1F2F2;
`;