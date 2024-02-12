import Link from "next/link.js";
import { useRouter } from "next/router";
import Form from "@/components/AddForm/AddForm";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CreatePlacePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/");
    }
  }, [session, router, status]);

  async function addPlace(place) {
    const response = await fetch("/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      return alert(data.message);
    }

    alert("Restaurant successfully added!");
    router.push("/");
  }

  if (session) {
    return <Form onSubmit={addPlace} formName={"add-place"} />;
  }
  return null;
}
