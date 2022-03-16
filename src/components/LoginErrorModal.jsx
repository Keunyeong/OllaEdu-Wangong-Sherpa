import styled from "styled-components";

const LoginErrorModal = ({ onClick }) => {
  return (
    <ModalContainer>
      <Modal>
        <h3>인증실패</h3>
        <p>아이디 또는 비밀번호가 일치하지 않습니다.</p>
        <button onClick={() => onClick(false)}>OK</button>
      </Modal>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(77, 77, 77, 0.62);
`;

const Modal = styled.aside`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 174px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #ffffff;
  h3 {
    background-color: #ff3737;
    padding: 10px 16px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    line-height: 26.06px;
    height: 48px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: #1b1b1b;
    padding: 30px 16px 14px;
    border-bottom: 1px solid #d8d8d8;
  }
  button {
    position: absolute;
    right: 16px;
    bottom: 15px;
    color: #ffffff;
    border: none;
    background-color: #ff3737;
    width: 40px;
    height: 32px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 667px) {
    width: 272px;
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export default LoginErrorModal;
