import { useState } from "react";
import styled from "styled-components";
import { Logo } from "../assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: "", pw: "" });

  const handleInputId = e => {
    setUser({ ...user, id: e.target.value });
  };

  const handleInputPw = e => {
    setUser({ ...user, pw: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.id === "" || user.pw === "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else {
      console.log("id:", user.id);
      console.log("password:", user.pw);
      setUser({ id: "", pw: "" });
      navigate("/main/monthly");
    }
  };
  return (
    <LoginPage>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>합격을 향한 토탈 맞춤형 솔루션</h1>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <strong>당신의 꿈을 응원합니다!</strong>
          <input
            type="text"
            placeholder="아이디"
            value={user.id}
            onChange={handleInputId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={user.pw}
            onChange={handleInputPw}
          />
          <button type="submit">로그인</button>
          <span>
            아직 회원이 아니신가요?{` `}
            <a href="/">회원가입</a>
          </span>
        </form>
      </div>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .logo {
    width: 100%;
    background-color: #5358cb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    img {
      margin-bottom: 44.72px;
    }
  }

  .login {
    width: 100%;
    margin: auto;
    form {
      padding: 5.5px 0;
      margin: auto;
      width: 334px;
      height: 293px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      strong {
        font-size: 26px;
        font-weight: 700;
      }
      input {
        height: 39px;
        border-radius: ${39 / 2}px;
        border: 1px solid #d8d8d8;
        background-color: #f5f5f5;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 400;
      }
      button {
        font-family: "Noto Sans KR", sans-serif;
        border: none;
        height: 55px;
        border-radius: ${55 / 2}px;
        background-color: #9498ef;
        color: #ffffff;
        font-size: 24px;
        font-weight: 700;
        &:hover {
          cursor: pointer;
        }
      }
      span {
        font-size: 16px;
        font-weight: 400;
        a {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Login;
