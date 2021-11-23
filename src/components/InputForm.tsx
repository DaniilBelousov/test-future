import React from "react";

interface Props {
  value: string;
  placeholder?: string;
  onSubmit?(event: React.FormEvent<HTMLFormElement>): void;
  onChange?(event: React.FormEvent<HTMLInputElement>): void;
};

const InputForm = (props: Props): React.ReactElement => {
  const { value, placeholder, onSubmit, onChange } = props;

  return (
    <form className="input-group input-group-sm mb-3" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        className="btn btn-sm btn-secondary"
        type="submit"
      >
        <span className="d-flex fs-6 material-icons">
          search
        </span>
      </button>
    </form>
  );
};

export default InputForm;