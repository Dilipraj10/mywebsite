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

export default function ManageUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = () => {
        axios.get("http://localhost:8080/api/gaming/alluser")
        .then(res => {
          console.log(res);
          setUsers(res.data.data)
        })
        .catch(err => {
          console.log(err);
          alert("Something went wromg")
        })
    }

  return (
    <>
        <Container
        maxWidth="xl"
        style={{
          marginTop: " 10px",
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
            User List
          </Typography>
          <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
            <TableContainer component={Paper}>
              <div
                style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: "8%", height: "20px" }}>
                        User ID
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        User Name
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Gmail
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users && users.length > 0 ? (
                      users.map((user) => (
                        <TableRow
                          key={user.userId}
                          style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                        >
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {user.userId}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {user.username}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {user.gmail}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={10}>No user available</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TableContainer>
          </div>
        </div>
      </Container>
    </>
  )
}
