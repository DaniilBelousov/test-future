import React from "react";

const Spinner = (): React.ReactElement => {
  return (
    <div className="spinner-grow text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;