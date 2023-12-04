import { btn, logout, login } from "./AuthButton.module.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          onClick={() => signOut("google")}
          className={`${btn} ${logout}`}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn("google")} className={`${btn} ${login}`}>
        Sign in
      </button>
    </>
  );
}
