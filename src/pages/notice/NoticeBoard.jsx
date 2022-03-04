import styled from "styled-components";

const Ul = styled.ul`
  width: 39%;
  height: ${(765 / 982) * 100 + "vh"};
  margin-top: ${(17 / 982) * 100 + "vh"};
  margin-left: ${(20 / 996) * 100 + "vw"};
  box-shadow: 0rem 0.5rem 1.375rem -0.375rem rgba(24, 39, 75, 0.12),
    0rem 0.875rem 4rem -0.25rem rgba(24, 39, 75, 0.12);
  background-color: #FFFFFF;
  border-radius: 20px 20px 0 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  height: ${(103 / 982) * 100 + "vh"};
  box-sizing: border-box;
  padding: 0.7rem 0.5rem;
  border-bottom: 1px solid grey;
`;

export default function NoticeBoard({locate}) {
  return (
    <Ul>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
      <Li>{locate}</Li>
    </Ul>
    
  );
}