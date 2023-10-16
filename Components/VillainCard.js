import React from "react";

function VillainCard({id, name, image, price}) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Alter Ego: {alter-ego}</p>
        <button>Love</button>
        <button>Hate</button>
    </li>
  );
}

export default VillainCard;