import React, { useState, useEffect, useRef, useContext } from "react";
import auth from "../../context/auth";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";

function Login(props) {
  const [address, setAddress] = useState("");
  const { errors, handleSubmit, register, watch } = useForm();

  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    if (data["password"] === "admin" && data["Email"] === "admin") {
      login();
    }
  };

  const formRef = useRef(null);

  console.log(watch("password"));

  /*
  const onSubmit = (event) => {
    event.preventDefault();
    // const sendData = {
    //   address,
    // };

    // const fd = new FormData(formRef.current);
    // const sendData = {};
    // for (let [name, value] of fd.entries()) {
    //   sendData[name] = value;
    // }
    // console.log(sendData);
  };
  */

  return (
    <div className="row p-5 row-cols-2">
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="address"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.address && errors.address.type === "required" && (
            <small
              id="emailHelp"
              className="form-text"
              style={{ color: "red" }}
            >
              Input required
            </small>
          )}
          {errors.address && errors.address.type === "minLength" && (
            <small
              id="emailHelp"
              className="form-text"
              style={{ color: "red" }}
            >
              Min Length is 3
            </small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="exampleInputPassword1"
            ref={register({ required: true })}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            auth.login(() => props.history.push("/"));
          }}
        >
          Sign in{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
