import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFirst = (e) => {
    setName(e.target.value);
  };

  const handleLast = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" onChange={handleFirst} required />
        <br />
        <label>Last Name:</label>
        <input type="text" onChange={handleLast} required />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Full Name: {name} {lastName}</p>}
    </>
  );
}
