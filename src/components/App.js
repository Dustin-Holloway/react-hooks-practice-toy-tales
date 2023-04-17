import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateToys(toy) {
    const filteredToys = toysData.filter((items) => items.id !== toy.id);
    setToysData(filteredToys);
  }

  function updateItems(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => updateToys(toy));
  }

  function handleAddToyObj(newToyObj) {
    setToysData([...toysData, newToyObj]);
  }

  function updatedLikedItems(data) {
    const updatedToyList = toysData.map((toyItem) => {
      if (toyItem.id === data.id) {
        return data;
      } else return toyItem;
    });
    setToysData(updatedToyList);
  }

  function updateLikes() {
    setToysData(toysData);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToyObj={handleAddToyObj} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        updateItems={updateItems}
        toys={toysData}
        updatedLikes={updatedLikedItems}
      />
    </>
  );
}

export default App;
