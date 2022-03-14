import styled from "styled-components";

export default function MainFooter() {
  return (
    <Foot>
      <div className="footer_header">
        <img src="../src/assets/footer_logo.svg" alt="LOGO" />
        <span>make your dream come true!</span>
      </div>
      <div className="footer_main">
        <div className="left">
          <div className="company_name">에듀해시글로벌파트너스㈜ 안동지사</div>
          <div className="pre_name">(구)김재규 공무원기숙학원</div>
          <div className="representative">대표 : 전중훤</div>
          <div className="business_num">사업자번호 : 463-85-01056</div>
          <div className="report_num">
            통신판매업신고번호 : 2021-경북안동-0002
          </div>
          <div className="academy_num">학원등록번호 : 110111-3171678 </div>
        </div>
        <div className="right">
          <div className="adress">
            <img src="../src/assets/adress_icon.svg" alt="ADRESS" />
            경상북도 안동시 임하면 건동길 34{" "}
          </div>
          <div className="mail">
            <img src="../src/assets/mail_icon.svg" alt="MAIL" />
            support@eduhashglobal.com{" "}
          </div>
          <div className="phone">
            <img src="../src/assets/phone_icon.svg" alt="PHONE" />
            054-823-9112
          </div>
          <div className="fax">
            <img src="../src/assets/fax_icon.svg" alt="FAX" />
            054-823-7781
          </div>
        </div>
      </div>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100vw;
  height: 23.25rem;
  background-color: #032164;
  color: #fff;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.015em;
  margin-top: 5rem;
  padding: 3.125rem 0;
  border-bottom: 1px solid #ffcb60;
  .footer_header {
    display: flex;
    flex-direction: column;
    width: 45rem;
    justify-content: center;
    align-items: flex-start;
    padding: 0.625rem;
    color: #ffcb60;
    font-size: 0.75rem;
    img {
      width: 10rem;
    }
  }
  .footer_main {
    display: flex;
    width: 45rem;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0.625rem;
      div {
        margin-bottom: 0.625rem;
      }
      .company_name {
        margin-bottom: 0;
      }
      .academy_num {
        margin-bottom: 0;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.625rem;
      img {
        margin-right: 0.313rem;
      }
      div {
        margin-bottom: 0.625rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
`;
