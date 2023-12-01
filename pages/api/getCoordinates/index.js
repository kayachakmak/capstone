export default async function handler(req, res) {
  if (req.method === "POST") {
    const { address } = req.body;

    if (!address) {
      res.status(400).json({ message: "Address is required" });
      return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
      address
    )}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.length === 0) {
        res.status(404).json({ message: "No results found for this address" });
        return;
      }

      const { lat, lon } = data[0];
      res.status(200).json({ lat: lat, long: lon });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Error fetching data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
