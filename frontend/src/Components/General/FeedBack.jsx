import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "@mui/material";
import Form from 'react-bootstrap/Form'
import axios from "axios";

export default function FeedBack() {
  const name = window.sessionStorage.getItem("name")
  const gmail = window.sessionStorage.getItem("gmail")
  const [feedback, setFeedback] = React.useState("");

  console.log(name);
  console.log(gmail);
  console.log(feedback);

  const handleSubmit = () => {
    axios.post("http://localhost:8080/api/gaming/addfeedback",{name,gmail,feedback})
    .then((res) => {
      console.log(res);
      alert("Feedback submited");
    })
    .catch((err) => {
      console.log(err);
      alert("Unable to Submit")
    })
  };

  return (
    <>
      <Navbar />
      <Form>
      <Container className="mt-5">
        <h1 style={{ textAlign: "center" }}>ENTER YOUR FEEDBACK</h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
            maxWidth: "400px", 
            margin: "auto", 
          }}
        >
          <Box sx={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <TextField
              value={name}
              id="name"
              label="Name"
              disabled
            />
            <TextField
              value={gmail}
              id="email"
              label="Gmail"
              disabled
            />
          </Box>
          <TextField
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            helperText="Please enter your feedback"
            id="feedback"
            label="Feedback"
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Container>
      </Form>
      <div style={{marginTop:"134px"}}>
        <Footer />
      </div>
    </>
  );
}
