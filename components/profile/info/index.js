import Image from "next/image";
import AuthButton from "@/components/auth-button/AuthButton";

export default function ProfileInfo({ session }) {
  return (
    <>
      <div className="flex  flex-col-reverse items-start space-x-4">
        <p className=" text-gray-700 ml-4">Welcome, {session.user?.name}</p>
        <Image
          width={80}
          height={80}
          className="rounded-full"
          src={session.user?.image || `/assets/images/default.png`}
          alt="Avatar"
          priority
        />
      </div>

      <AuthButton />
    </>
  );
}
