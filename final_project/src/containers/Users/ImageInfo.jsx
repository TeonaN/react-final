import React from "react";
import Photos from "../../components/Images/Photos";
import auth from "../../components/context/auth";

function ImageInfo(props) {
  return (
    <div className="row p-4 flex-column">
      <Photos />
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          auth.logout(() => {
            props.history.push("/login");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default ImageInfo;
