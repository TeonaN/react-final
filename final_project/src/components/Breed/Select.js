import React, { useState, useEffect } from "react";
import axios from "axios";
import Breed from "./Breed";

const style = {
  marginTop: "30px",
};
function Select() {
  const [breeds, setBreeds] = useState([]);
  const [id, setId] = useState("");
  const token = "c36cb106-a87b-44c2-9d70-3bd0f277c084";

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/breeds", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBreeds(response.data);
      })
      .catch((err) => {
        console.error("[Select.jsx]", err.message);
      });
  }, []);

  function handleChange(breedId) {
    setId(breedId);
  }
  const options = breeds.map((ob, i) => {
    return (
      <option key={ob.id + i} value={ob.id}>
        {ob.name}
      </option>
    );
  });

  return (
    <div style={style}>
      <select
        className="custom-select"
        id="inputGroupSelect01"
        defaultValue=""
        onChange={(e) => handleChange(e.target.value)}
      >
        {options}
      </select>
      <Breed breedId={id} />
      {/* {console.log(id)} */}
    </div>
  );
}

export default Select;
