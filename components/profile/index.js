import { profile } from "./Profile.module.css";
import SignIn from "./sign-in";
import ProfileInfo from "./info";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <section className={profile}>
      {session ? <ProfileInfo session={session} /> : <SignIn />}
    </section>
  );
}
