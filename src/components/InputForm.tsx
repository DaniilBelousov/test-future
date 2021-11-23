import React from "react";

const InputForm = () => {
  return (
    <div className="input-group input-group-sm mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Recipient's username"
      />
      <button
        className="btn btn-sm btn-secondary"
        type="button"
      >
        <span className="d-flex fs-6 material-icons">
          search
        </span>
      </button>
    </div>
  );
};

export default InputForm;