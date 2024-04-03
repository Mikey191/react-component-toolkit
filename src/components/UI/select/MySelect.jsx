import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)}>
      <option disabled selected>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
