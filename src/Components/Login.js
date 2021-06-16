import React, { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../images/3.png";
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
    <div
      className="container bg-dark"
      style={{ margin: "50px auto", borderRadius: "55px" }}
    >
      <h1 className="text-center" style={{ marginTop: "50px" }}>
        {" "}
        Login to APE{" "}
      </h1>
      <div className="grid-2" style={{ padding: "100px 0px" }}>
        <div className="center ">
          <img
            src={img2}
            className="img-fluid"
            style={{ width: "250px", margin: "0px 10px" }}
          />
        </div>
        <div>
          <label>
            Email:
            <input
              style={{
                height: "30px",
                borderRadius: "25px",
                padding: "4px 8px"
              }}
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
              style={{
                height: "30px",
                borderRadius: "25px",
                padding: "4px 8px"
              }}
              type="password"
              name="upwd"
              onChange={e => {
                setPass(e.target.value);
              }}
              value={pass}
            />
          </label>
          <Link to="/Reg">
            <input
              className="btn btn-success"
              style={{ borderRadius: "25px", padding: "8px 50px" }}
              type="button"
              value="Register"
            />
          </Link>
          <Link to="/Home">
            <input
              className="btn btn-success"
              type="button"
              style={{ borderRadius: "25px", padding: "8px 50px" }}
              value="Login"
              onClick={handleLogin}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
