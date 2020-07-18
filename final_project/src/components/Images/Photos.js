import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotosCard from "./PhotosCard";

function Photos() {
  const [images, setImages] = useState([]);
  const token = "c36cb106-a87b-44c2-9d70-3bd0f277c084";

  useEffect(() => {
    axios
      .get(
        "https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setImages(response.data);
      })
      .catch((err) => {
        console.error("[Images.jsx]", err.message);
      });
  }, []);

  let content = null;
  content = images.map((ob) => {
    console.log(ob);
    return <PhotosCard key={ob.id} url={ob.url} />;
  });

  return <div className="border-0">{content} </div>;
}

export default Photos;
