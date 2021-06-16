import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    var userData = {
      email: email,
      password: pass
    };
    console.log("myuserdata", userData);
    axios.post("http://dd4c2c8c6a05.ngrok.io/student/login", userData).then(
      response => {
        console.log("success");
        console.log(response);
      },
      error => {
        console.log(error);
        console.log("failed");
      }
    );
  };

  return (
    <div className="container">
      <h1 className="text-center"> Login </h1>
      <div className="center">
        <label>
          Email:
          <input
            align="center"
            type="Email"
            name="uname"
            onChange={e => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            align="center"
            type="password"
            name="upwd"
            onChange={e => {
              setPass(e.target.value);
            }}
            value={pass}
          />
        </label>
        <Link to="/Reg">
          <input className="btn btn-success" type="button" value="Register" />
        </Link>
        <Link to="/Home">
          <input
            className="btn btn-success"
            type="button"
            value="login"
            onClick={handleLogin}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
