import Link from "next/link.js";
import styled from "styled-components";
import { useRouter } from "next/router";
/* 
import { StyledLink } from "../components/StyledLink.js";
 */
import Form from "@/components/AddForm/AddForm";


const StyledBackLink = styled(StyledLink)`
  justify-self: flex-start;
`;

export default function CreatePlacePage() {
  const router = useRouter();

  async function addPlace(place) {
    const response = await fetch("/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(place),
    });
    console.log("the place: ", place);

    router.push("/");

  return (
    <>
      <h2 id="add-place">Add Place</h2>
      <Link href="/" passHref legacyBehavior>
        <StyledBackLink>back</StyledBackLink>
      </Link>
      <Form onSubmit={addPlace} formName={"add-place"} />
    </>
  );
}