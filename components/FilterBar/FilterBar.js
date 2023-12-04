import { cuisines } from "@/public/cuisines";

export default function FilterBar({ type, onChange }) {
  return (
    <select value={type} onChange={onChange}>
      <option value="">All Restaurants</option>
      {cuisines.map((cuisine, idx) => (
        <option key={idx} value={cuisine}>
          {cuisine}
        </option>
      ))}
    </select>
  );
}
