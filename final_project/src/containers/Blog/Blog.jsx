import React from "react";
import auth from "../../components/context/auth";

function Blog(props) {
  return (
    <div ClassName="jumbotron">
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
        </button>{" "}
      </div>
    </div>
  );
}

export default Blog;
