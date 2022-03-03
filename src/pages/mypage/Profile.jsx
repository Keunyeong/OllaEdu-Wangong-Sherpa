import styled from "styled-components";

const Profile = () => {
  console.log(window.location.pathname);
  return <UserProfile>Profilepage</UserProfile>;
};

const UserProfile = styled.div`
  width: ${(483 / 1512) * 100 + "vw"};
  height: ${(666 / 982) * 100 + "vh"};
  border: 1px solid red;
`;

export default Profile;
