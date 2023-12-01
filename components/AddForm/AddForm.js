import styled from "styled-components";
import { StyledButton } from "../StyledComponents/StyledButton";
import { useState } from "react";

export const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  border: 3px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled.label`
  font-weight: bold;
`;
const cuisines = [
  "Turkish",
  "Chinese",
  "Italian",
  "French",
  "Mexican",
  "Spanish",
  "Greek",
  "Lebanese",
  "Ethiopian",
  "Moroccan",
  "Brazilian",
  "Peruvian",
  "Argentine",
  "American",
  "Russian",
  "Indian",
  "Japanese",
  "Korean",
  "Thai",
  "Vietnamese",
  "Arabic",
  "German",
  "Malesian",
];
export default function Form({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState("");

  async function getCoordinates(address) {
    const response = await fetch("/api/getCoordinates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    return response.json();
  }

  async function handleSubmit(event, isChecked) {
    event.preventDefault();
    setErrorMessage("");
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const coordinatesResponse = await getCoordinates(data.address);
      const coordinates = {
        lat: parseFloat(coordinatesResponse.lat),
        long: parseFloat(coordinatesResponse.long),
      };
      if (
        !(
          13.752948 < coordinates.lat < 13.117115 ||
          52.340609 < coordinates.long < 52.676616
        )
      ) {
        return setErrorMessage("Please enter a valid address within Berlin");
      }

      data.coordinates = coordinates;

      onSubmit(data);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setErrorMessage("Please enter a valid address");
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">Restaurant Name*:</Label>
      <Input id="name" name="name" type="text" required />
      <select name="type">
        <option required value="">
          Select Cuisine*
        </option>
        {cuisines.map((cuisine) => (
          <option key={cuisine} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      <Label htmlFor="image">Image Url*:</Label>
      <Input id="image" name="image" type="text" required />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Label htmlFor="address">Address*:</Label>
      <Input id="address" name="address" type="text" required />
      <Label htmlFor="link">Restaurant`s Website:</Label>
      <Input id="link" name="link" type="text" />
      <Label htmlFor="link">Restaurant`s Menu:</Label>
      <Input id="link" name="link" type="text" />
      <Label htmlFor="isAnimalFriendly">Is restaurant animal friendly?:</Label>
      <Input type="checkbox" name="isAnimalFriendly" />
      <Label htmlFor="isChildrenFriendly">
        Is restaurant children friendly?:
      </Label>
      <Input type="checkbox" name="isChildrenFriendly" />

      <StyledButton type="submit">Add restaurant</StyledButton>
      <small>* is required areas.</small>
    </FormContainer>
  );
}
