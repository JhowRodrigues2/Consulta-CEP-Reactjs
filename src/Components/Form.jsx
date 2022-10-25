import React from "react";

const Form = ({ local, value }) => {
  return (
    <div>
      <label>{local} </label>
      <input type="text" value={value} disabled={true} />
    </div>
  );
};

export default Form;
