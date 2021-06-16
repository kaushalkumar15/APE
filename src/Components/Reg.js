import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Reg = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [section, setSection] = useState("");
  const [semester, setSemester] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleRegister = () => {
    var userData = {
      firstname: fname,
      lastname: lname,
      email: email,
      password: pass,
      rollno: parseInt(rollNo),
      semester: parseInt(semester),
      section: section,
      phoneno: parseInt(phoneNo),
      subjects: []
    };
    console.log("myuserdata", userData);
    axios.post("http://dd4c2c8c6a05.ngrok.io/student/signup", userData).then(
      response => {
        console.log("success");
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  };

  return (
    <div className="container">
      <h1 className="text-center"> Register </h1>
      <div className="center">
        <label>
          First Name:
          <input
            type="text"
            name="fname"
            onChange={e => {
              setFname(e.target.value);
            }}
            value={fname}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lname"
            onChange={e => {
              setLname(e.target.value);
            }}
            value={lname}
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            onChange={e => {
              setEmail(e.target.value);
            }}
            value={email}
            name="uemail"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            onChange={e => {
              setPass(e.target.value);
            }}
            value={pass}
            name="upwd"
          />
        </label>
        <label>
          Roll No:
          <input
            type="text"
            onChange={e => {
              setRollNo(e.target.value);
            }}
            value={rollNo}
            name="cupwd"
          />
        </label>
        <label>
          Semester:
          <input
            type="text"
            onChange={e => {
              setSemester(e.target.value);
            }}
            value={semester}
            name="sem"
          />
        </label>
        <label>
          Section:
          <input
            type="text"
            onChange={e => {
              setSection(e.target.value);
            }}
            value={section}
            name="sec"
          />
        </label>
        <label>
          Phone No:
          <input
            type="text"
            onChange={e => {
              setPhoneNo(e.target.value);
            }}
            value={phoneNo}
            name="phno"
          />
        </label>
        <Link to="/Login">
          <input
            className="btn btn-success"
            type="button"
            value="register"
            onClick={handleRegister}
          />
        </Link>
        <Link to="/Login">
          <input className="btn btn-success" type="button" value="login" />
        </Link>
      </div>
    </div>
  );
};

export default Reg;
