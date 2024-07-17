import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function ManageFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = () => {
    axios.get("http://localhost:8080/api/gaming/getfeedback")
      .then(res => {
        console.log(res);
        setFeedbacks(res.data.data);
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#F0EBE3",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Feedback List
        </Typography>
        <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
          <TableContainer component={Paper}>
            <div style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: "8%", height: "20px" }}>
                      Name
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Gmail
                    </TableCell>
                    <TableCell style={{ width: "15%", height: "20px" }}>
                      Feedback
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {feedbacks && feedbacks.length > 0 ? (
                    feedbacks.map((feedback) => (
                      <TableRow
                        key={feedback.feedbackId}
                        style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                      >
                        <TableCell style={{ fontSize: "0.8rem" }}>
                          {feedback.username}
                        </TableCell>
                        <TableCell style={{ fontSize: "0.8rem" }}>
                          {feedback.gmail}
                        </TableCell>
                        <TableCell style={{ fontSize: "0.8rem" }}>
                          {feedback.feedback}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>No Feedback available</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </div>
      </div>
    </Container>
  );
}
