import Profile from "../profile";
import styled from "styled-components";

const LoginBarContainer = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  text-align: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInContainer = styled.div`
  color: #333;
  font-size: 1em;
`;

const UserName = styled.p`
  margin-left: 10px;
  font-size: 1.2em;
  color: #555;
`;

export default function LoginBar() {
  return (
    <LoginBarContainer>
      <Profile />
    </LoginBarContainer>
  );
}
