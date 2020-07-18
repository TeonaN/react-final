import React from "react";
import Select from "../../components/Breed/Select";
import auth from "../../components/context/auth";

function Home(props) {
  return (
    <div className="row p-4 flex-column">
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
      <Select />
    </div>
  );
}

export default Home;
