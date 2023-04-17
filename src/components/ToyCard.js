import React from "react";
// import { useState } from "react";

function ToyCard({ toy, itemToDelete, updateLikes }) {
  function handleOnDelete(e) {
    itemToDelete(toy);
  }

  function handleOnClickLike(e) {
    console.log(toy.likes);

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((data) => updateLikes(data));
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleOnClickLike}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleOnDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
