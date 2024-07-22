import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Switch from "@mui/material/Switch";
import bgVideo from "../video/loginvideo.mp4";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Login() {
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLoginType = () => {
    setIsAdminLogin(!isAdminLogin);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/gaming/userlogin", { gmail, password})
      .then((res) => {
        if ("User successfully logined!" === res.data.message) {
          window.sessionStorage.setItem("name", res.data.data.username);
          window.sessionStorage.setItem("gmail", res.data.data.gmail);
          console.log(res);
          alert("Login successful");
          navigate("/main");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Somthing went wrong");
      });
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/gaming/adminlogin",{gmail, password})
      .then((res) => {
        console.log(res);
        if(res.data.message === "login successful!"){
          alert("Login successfull")
          navigate("/admindash");
        }
        else{
          alert("Invalid credentials")
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div
        style={{
          justifyContent: "center",
          width: "35%",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "20px",
          }}
        >
          <h3>User Login</h3>
          <Switch checked={isAdminLogin} onChange={toggleLoginType} />
          <h3>Admin Login</h3>
        </div>

        <Form
          onSubmit={handleUserSubmit}
          id="userForm"
          style={{ display: isAdminLogin ? "none" : "block" }}
        >
          <h3>User Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={gmail}
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-1 mb-3">
          <Link to="/UserForgotPassword"> Forgot password </Link> 
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {/* Admin Login Form */}
        <Form onSubmit={handleAdminSubmit}
          id="adminForm"
          style={{
            display: isAdminLogin ? "block" : "none",
            marginTop: "10px",
          }}
        >
          <h3>Admin Login</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={gmail}
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mt-1 mb-3">
          <Link to="/AdminForgotPassword"> Forgot password </Link> 
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
