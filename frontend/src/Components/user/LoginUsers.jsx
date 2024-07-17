import { React, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../General/Navbar";
import Footer from "../General/Footer";
import axios from "axios";

export default function LoginUsers() {
  const navigate = useNavigate();
  const [gmail, setGmail] = useState("");
  const [password, setpassword] = useState("");

  const handleClick = () => {
    navigate("/UserForgotPassword");
  };

  const handleClick2 = () => {
    navigate("/Register");
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/api/gaming/userlogin", { gmail, password })
      .then((res) => {
        if ("User successfully logined!" === res.data.message) {
          window.sessionStorage.setItem("name", res.data.data.username);
          window.sessionStorage.setItem("gmail", res.data.data.gmail);
          console.log(res);
          alert("Login successful");
          navigate("/store");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Somthing went wrong");
      });
  };

  return (
    <>
      <Navbar />
      <Form onSubmit={handleSubmit}>
        <Container
          className="mt-5"
          style={{ textAlign: "center", width: "40%" }}
        >
          <h1>User Login</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50%" },
              "& .MuiTextField-root": {
                width: "100%",
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="Gmail"
              label="Gmail"
              variant="outlined"
              value={gmail}
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography variant="body2">
              Don't have an account?{" "}
              <a
                href="#"
                onClick={handleClick2}
                style={{ textDecoration: "none" }}
              >
                Register
              </a>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography variant="body2">
              <a
                href="#"
                onClick={handleClick}
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </Typography>
          </div>

          <Button
            variant="success"
            type="submit"
            className="mt-3"
            style={{ width: "150px" }}
          >
            Login
          </Button>
        </Container>
      </Form>
      <div style={{ marginTop: "164px" }}>
        <Footer />
      </div>
    </>
  );
}
