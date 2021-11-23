import React from "react";

interface Props {
  value: string;
  options: string[];
  onChange?(newValue: React.FormEvent<HTMLSelectElement>): void;
};

function SelectForm(props: Props): React.ReactElement {
  const { value, options, onChange } = props;

  return (
    <select value={value} onChange={onChange} className="form-select form-select-sm mb-3">
      {
        options.map((value) => (
          <option value={value} key={value} >
            {value}
          </option>
        ))
      }
    </select>
  );
};

export default SelectForm;