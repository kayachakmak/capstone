import SignIn from "./sign-in";
import ProfileInfo from "./info";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div className="bg-banner flex  justify-between items-end	 ">
      {session ? <ProfileInfo session={session} /> : <SignIn />}
    </div>
  );
}
