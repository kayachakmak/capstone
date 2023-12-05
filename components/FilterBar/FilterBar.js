import { cuisines } from "@/public/cuisines";

export default function FilterBar({
  type,
  onChange,
  animal,
  child,
  onAnimalChange,
  onChildChange,
}) {
  return (
    <>
      <select value={type} onChange={onChange}>
        <option value="">All Restaurants</option>
        {cuisines.map((cuisine, idx) => (
          <option key={idx} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </select>
      <label>
        <input
          type="checkbox"
          checked={child}
          onChange={(e) => onChildChange(e)}
        />
        Child Friendly
      </label>
      <label>
        <input
          type="checkbox"
          checked={animal}
          onChange={(e) => onAnimalChange(e)}
        />
        Animal Friendly
      </label>
    </>
  );
}
