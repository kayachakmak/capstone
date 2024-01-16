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
    alert("Rerstaurant successfully added!");
    router.push("/");
  }

  if (session) {
    return (
      <div>
        <br></br>
        <Link
          className="inline-flex ml-80 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
          href="/"
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>Go back</span>
        </Link>
        <Form onSubmit={addPlace} formName={"add-place"} />
      </div>
    );
  }
  return null;
}
