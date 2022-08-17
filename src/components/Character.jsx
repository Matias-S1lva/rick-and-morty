import React from "react";

function Character({ character }) {
  return (
    <div className="text-center p-5 " key={character.id}>
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Character;
