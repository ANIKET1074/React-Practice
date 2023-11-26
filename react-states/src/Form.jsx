import React, { useState } from "react";

const Form = () => {
  //   const [fullName, setFullName] = useState("");

  //   const handleNameChange = (event) => {
  //     console.log(event.target.value);
  //     setFullName(event.target.value);
  //   };

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter the Name"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter the Name"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      &nbsp;&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Form;
