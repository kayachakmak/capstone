import AuthButton from "@/components/auth-button/AuthButton";
import styled from "styled-components";

const SignInContainer = styled.div`
  color: #333;
  font-size: 1em;
`;
export default function SignIn() {
  return (
    <SignInContainer>
      <p>You are not signed in.</p>
      <AuthButton />
    </SignInContainer>
  );
}
