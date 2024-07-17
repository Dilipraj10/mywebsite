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

export default function ManageDownload() {

    const [downloads, setDownloads] = useState([]);

    useEffect(() => {
      const getDownloads = async () => {
        try {
          const res = await axios.get("http://localhost:8080/api/gaming/getdownloads");
          setDownloads(res.data.data);
        } catch (err) {
          console.log(err);
          alert("Something went wrong");
        }
      };
    
      getDownloads();
    }, []);


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
            Download List
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
                        Download ID
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        User Gmail
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Game Name
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {downloads && downloads.length > 0 ? (
                      downloads.map((download) => (
                        <TableRow
                          key={download.downloadId}
                          style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                        >
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {download.downloadId}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {download.gmail}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {download.gameName}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={10}>No Downloads available</TableCell>
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
  );
}
