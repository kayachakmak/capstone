import Image from "next/image";
import AuthButton from "@/components/auth-button/AuthButton";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const UserName = styled.p`
  margin-left: 10px;
  font-size: 1.2em;
  color: #555;
`;

export default function ProfileInfo({ session }) {
  return (
    <ProfileContainer>
      <Image
        width={150}
        height={150}
        src={session.user?.image || `/assets/images/default.png`}
        alt="Avatar"
        priority
      />
      <UserName>Hello {session.user?.name}</UserName>
      <AuthButton />
    </ProfileContainer>
  );
}
