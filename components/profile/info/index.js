import Image from "next/image";
import AuthButton from "@/components/auth-button/AuthButton";

export default function ProfileInfo({ session }) {
  return (
    <div className="flex  justify-around	">
      <div>
        <Image
          width={80}
          height={80}
          style={{ borderRadius: 80 }}
          src={session.user?.image || `/assets/images/default.png`}
          alt="Avatar"
          priority
        />
        <p>Welcome, {session.user?.name}</p>
      </div>
      <div className="self-end	">
        <AuthButton />
      </div>
    </div>
  );
}
