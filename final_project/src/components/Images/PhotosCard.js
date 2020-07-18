import React from "react";

function PhotosCard({ url }) {
  return (
    <div>
      <img alt="picture" src={url} width="500" height="600" />{" "}
    </div>
  );
}

export default PhotosCard;
