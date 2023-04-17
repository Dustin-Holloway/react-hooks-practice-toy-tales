import React from "react";
import { useState } from "react";

function ToyForm({ addToyObj }) {
  const newToyObj = {
    name: "",
    image: "",
  };

  const [toyObj, setToyObj] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setToyObj(newToyObj);

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newToyObj),
    })
      .then((res) => res.json())
      .then((newData) => addToyObj(newData));
  };

  function handleOnImageChange(event) {
    newToyObj.image = event.target.value;
  }

  function handleNameOnChange(e) {
    newToyObj.name = e.target.value;
    console.log(newToyObj);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleOnSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name={newToyObj.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNameOnChange}
        />
        <br />
        <input
          type="text"
          name={newToyObj.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleOnImageChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
