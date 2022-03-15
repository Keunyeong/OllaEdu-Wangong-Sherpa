import { useState, useContext } from "react";
import styled from "styled-components";
import { Login_image, Logo_black } from "../assets";
import { Context } from "../context/Context";
import { tryLogin } from "../context/reducer/action";

const Login = () => {
  const { dispatch } = useContext(Context);
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
      dispatch(tryLogin(user));
    }
  };
  return (
    <LoginPage>
      <div className="logo">
        <img src={Login_image} alt="Login_image" />
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <img src={Logo_black} alt="logo" />
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
          <span>아이디, 비밀번호 찾기는 홈페이지에서 이용 부탁드립니다.</span>
        </form>
      </div>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color: #ffffff;
    img {
      height: 100%;
    }
  }

  .login {
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
      img {
        width: 258px;
        margin: 0 auto;
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
        background-color: #032164;
        color: #ffffff;
        font-size: 24px;
        font-weight: 700;
        &:hover {
          cursor: pointer;
        }
      }
      span {
        font-size: 12px;
        font-weight: 400;
        color: #6a6a6a;
      }
      @media screen and (max-width: 667px) {
        padding: 0;
        width: 291px;
        height: 224px;
        img {
          width: 188px;
        }
        input {
          height: 29px;
          border-radius: ${29 / 2}px;
          font-size: 12px;
          padding: 7px 14px;
        }
        button {
          height: 40px;
          border-radius: ${40 / 2}px;
          font-size: 18px;
        }
        span {
          font-size: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    background: linear-gradient(
      149.35deg,
      rgba(3, 33, 100, 0.4) 0%,
      rgba(255, 203, 96, 0.4) 100%
    );
    .logo {
      display: none;
    }
  }
`;

export default Login;
