import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default function UserForgotPassword() {
  const navigate = useNavigate();
  const [gmail, setGmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/api/gaming/userpasswordupdate", { gmail, password })
    .then(res => {
      if(res.data.message === "password updated"){
        console.log(res);
        alert(res.data.message)
        navigate('/')
      }
      else{
        alert("Invalid gmail")
      }
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong")
    })
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container
          className="mt-5"
          style={{ textAlign: "center", width: "40%" }}
        >
          <h1>Forgotten Password</h1>
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
              type="gmail"
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
          <Button
            variant="success"
            type="submit"
            className="mt-3"
            style={{ width: "150px" }}
          >
            submit
          </Button>
        </Container>
      </Form>
    </>
  );
}
