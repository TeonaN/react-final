import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Users from "./containers/Users/ImageInfo";
import { ProtectedRoute } from "./components/context/protected.route";
import Login from "./components/Form/Login";
import Navbar from "./components/NavBar/Navbar";
import ImageInfo from "./containers/Users/ImageInfo";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />

          <div className="container">
            <Navbar /> <hr />
            <ProtectedRoute path="/" exact component={Home} />
            <ProtectedRoute path="/images" component={ImageInfo} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
