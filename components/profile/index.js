import SignIn from "./sign-in";
import ProfileInfo from "./info";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <div
      className="bg-no-repeat bg-center bg-content bg-banner shadow-lg h-28"
      style={{
        backgroundImage: `url('https://i.ibb.co/W3nXQHx/DALL-E-2023-12-08-14-46-34-A-horizontal-banner-with-a-maximum-width-and-a-height-of-200-pixels-promi.png')`,
        backgroundSize: "45%",
      }}
    >
      <div className="flex h-full justify-between items-end	 ">
        {session ? <ProfileInfo session={session} /> : <SignIn />}
      </div>
    </div>  
  );
}
