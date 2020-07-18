import React from "react";

function BreedCard({ name, origin, description, life_span }) {
  return (
    <div>
      <h4>Name</h4>
      <p className="border border-primary rounded">{name}</p>
      <h4>Description</h4>
      <p className="border border-primary rounded">{description}</p>
      <h4>Origin</h4>
      <p className="border border-primary rounded">{origin}</p>
      <h4>Life Span</h4>
      <p className="border border-primary rounded">{life_span}</p>
    </div>
  );
}

export default BreedCard;
