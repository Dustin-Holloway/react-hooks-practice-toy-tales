import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, updateItems, updatedLikes }) {
  function updateLikes(data) {
    updatedLikes(data);
  }

  const toy = toys.map((item) => (
    <ToyCard
      itemToDelete={itemToDelete}
      key={item.id}
      toy={item}
      updateLikes={updateLikes}
    />
  ));
  function itemToDelete(toy) {
    updateItems(toy);
  }

  return <div id="toy-collection">{toy}</div>;
}

export default ToyContainer;
