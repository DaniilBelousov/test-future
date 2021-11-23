import React from "react";

const SelectForm = () => {
  return (
    <select className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default SelectForm;