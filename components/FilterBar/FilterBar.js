import { cuisines } from "@/public/cuisines";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  background-color: white;
  margin-right: 15px;
  font-size: 1em;
  &:focus {
    border-color: #0077cc;
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  margin-right: 20px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 5px;
  accent-color: #0077cc;
`;

export default function FilterBar({
  type,
  onChange,
  animal,
  child,
  onAnimalChange,
  onChildChange,
}) {
  return (
    <FilterContainer>
      <StyledSelect value={type} onChange={onChange}>
        <option value="">All Restaurants</option>
        {cuisines.map((cuisine, idx) => (
          <option key={idx} value={cuisine}>
            {cuisine}
          </option>
        ))}
      </StyledSelect>
      <CheckboxLabel>
        <StyledCheckbox checked={child} onChange={(e) => onChildChange(e)} />
        Child Friendly
      </CheckboxLabel>
      <CheckboxLabel>
        <StyledCheckbox checked={animal} onChange={(e) => onAnimalChange(e)} />
        Animal Friendly
      </CheckboxLabel>
    </FilterContainer>
  );
}
