export default async function getCoordinates(address) {
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
