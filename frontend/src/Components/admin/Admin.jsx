import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../General/Navbar";
import Footer from "../General/Footer";
import axios from "axios";
import Form from 'react-bootstrap/Form'

export default function Admin() {
  const navigate2 = useNavigate();
  const [gmail, setGmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AdminForgotPassword");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/gaming/adminlogin",{gmail,password})
      .then((res) => {
        console.log(res);
        if(res.data.message === "login successful!"){
          alert("Login successfull")
          navigate2("/admindash");
        }
        else{
          alert("Invalid credentials")
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
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
          <h1>Admin Login</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50%" },
              "& .MuiTextField-root": {
                width: "100%", // Adjusted width for TextField
                backgroundColor: "#f0f0f0", // Background color for TextField
                borderRadius: "5px", // Optional: Adds rounded corners to TextField
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Gmail"
              variant="outlined"
              value={gmail}
              onChange={(e) => {
                setGmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
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
              <a
                href="#"
                onClick={handleClick}
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </Typography>
          </div>

          {/* Submit button */}
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
      <div style={{ marginTop: "194px" }}>
        <Footer />
      </div>
    </>
  );
}
