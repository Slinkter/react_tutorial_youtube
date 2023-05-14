import React, { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    const formData = new FormData(e.currentTarget);
    const name = FormData.get("name");
    const newUser = Object.fromEntries(formData);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <div>
      <form action="">
        <h4></h4>
        <div>
          <label htmlFor=""> name </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
      </form>
    </div>
  );
};

export default UncontrolledInputs;
