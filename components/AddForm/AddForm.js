import { useState } from "react";
import { cuisines } from "@/public/cuisines";
import getCoordinates from "@/utils/utils";

export default function Form({ onSubmit }) {
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
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
          52.340609 < coordinates.lat &&
          coordinates.lat < 52.676616 &&
          13.117115 < coordinates.long &&
          coordinates.long < 13.752948
        )
      ) {
        return setErrorMessage("Please enter a valid address within Berlin");
      }
      data.isAnimalFriendly
        ? (data.isAnimalFriendly = true)
        : (data.isAnimalFriendly = false);

      data.isChildFriendly
        ? (data.isChildFriendly = true)
        : (data.isChildFriendly = false);

      data.coordinates = coordinates;
      console.log("the place", data);
      onSubmit(data);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setErrorMessage("Please enter a valid address");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <div
        className="relative bg-cover bg-no-repeat bg-right w-full h-full "
        style={{
          backgroundImage: `url("https://i.ibb.co/pbR0cBv/DALL-E-2023-12-11-10-29-46-A-high-opacity-background-image-with-a-subtle-elegant-assortment-of-food.png")`,
          boxShadow: "inset 0 0 100px 100px white", // Added box-shadow for the gradient effect
        }}
      >
        <div className="flex items-center justify-center h-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-80 shadow-md rounded px-12 pt-8 pb-8 mb-4 w-full md:w-3/4 lg:w-1/3"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Restaurant Name*:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <select
                name="type"
                defaultValue=""
                className="shadow border rounded w-full py-2 px-3 text-green-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option disabled value="">
                  Select Cuisine*
                </option>
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Image Url*:
              </label>
              <input
                id="image"
                name="image"
                type="text"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {errorMessage && (
              <div className="text-xs italic text-red-600 ">{errorMessage}</div>
            )}

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Address*:
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="link"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Restaurant`s Website:
              </label>
              <input
                id="link"
                name="link"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="menu"
                className="block text-green-700 text-sm font-bold mb-2"
              >
                Restaurant`s Menu:
              </label>
              <input
                id="menu"
                name="menu"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input type="checkbox" name="isAnimalFriendly" className="mr-2" />
              <label
                htmlFor="isAnimalFriendly"
                className="text-green-700 text-sm font-bold"
              >
                Is restaurant animal friendly?
              </label>
            </div>

            <div className="mb-6 flex items-center">
              <input type="checkbox" name="isChildFriendly" className="mr-2" />
              <label
                htmlFor="isChildFriendly"
                className="text-green-700 text-sm font-bold"
              >
                Is restaurant children friendly?
              </label>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="text-indigo-600 dark:text-white border-indigo-600 dark:border-indigo-400 hover:bg-indigo-600 hover:border-indigo-500 inline-flex items-center justify-center rounded-md border py-4 px-10 text-center text-base transition hover:text-white lg:px-8"
              >
                Add the restaurant
              </button>
            </div>

            <div className="text-xs italic">* is required areas.</div>
          </form>
        </div>
      </div>
    </div>
  );
}
