import React, { useState, useEffect } from "react";
import axios from "axios";
import BreedCard from "./BreedCard";

function Breed({ breedId }) {
  const [breedData, setbreedData] = useState([]);
  const token = "c36cb106-a87b-44c2-9d70-3bd0f277c084";

  useEffect(() => {
    axios
      .get(`https://api.thecatapi.com/v1/breeds/${breedId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setbreedData(response.data);
        console.log(breedData);
      })
      .catch((err) => {
        console.error("[Breed.js]", err.message);
      });
  }, [breedId]);

  return (
    <div>
      <BreedCard
        name={breedData.name}
        description={breedData.description}
        origin={breedData.origin}
        life_span={breedData.life_span}
      />
    </div>
  );
}

export default Breed;
