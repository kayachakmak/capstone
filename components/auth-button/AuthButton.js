import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut("google")}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </>
  );
}
