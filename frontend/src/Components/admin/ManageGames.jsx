import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function ManageGames() {
  const [games, setGames] = useState([]);
  const [gameId, setGameId] = useState("");
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [description, setGameDescription] = useState("");
  const [gameType, setGameType] = useState("");
  const [totalDownloads, setTotalDownloads] = useState("");

  useEffect(() => {
    getGames();
  },[]);

  const clearFields = () => {
    setGameId('')
    setGameName('')
    setGameImage('')
    setGameDescription('')
    setGameType('')
    setTotalDownloads('')
  }

  const Type = ["PC GAME", "MOBILE"];

  const getGames = () => {
    axios
      .get("http://localhost:8080/api/gaming/getgames")
      .then((res) => {
        console.log(res);
        setGames(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addGame = () => {
    axios.post("http://localhost:8080/api/gaming/addgame",{gameId,gameName,gameImage,gameType,description,totalDownloads})
    .then(res => {
      console.log(res);
      alert("Game added!")
      clearFields();
      getGames();
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong");
    })
  };

  const selectGameToUpdate = (gameId) => {
    const selectGame = games.find(game => game.gameId === gameId)
    setGameId(selectGame.gameId)
    setGameName(selectGame.gameName)
    setGameImage(selectGame.gameImage)
    setGameDescription(selectGame.description)
    setGameType(selectGame.gameType)
    setTotalDownloads(selectGame.totalDownloads)
  };

  const updateGame = () => {
      axios.put("http://localhost:8080/api/gaming/updategame",{gameId,gameName,gameImage,description,gameType,totalDownloads})
    .then(res => {
      console.log(res);
      alert("Updated successfully")
      clearFields()
      getGames()
    })
    .catch(err => {
      alert("Something went wronfg !")
    })
  };

  const deleteGame = (gameId) => {
    axios.delete("http://localhost:8080/api/gaming/deletegame",{gameId})
    .then(res => {
      console.log(res);
      alert("Successfully deleted!")
      getGames()
    })
    .catch(err => {
      console.log(err);
      alert("Something went wrong") 
    })
  };

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
            marginBottom: "10px",
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Manage Games
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              backgroundColor: "#F0EBE3",
              marginBottom: "10px",
            }}
          >
            <TextField
              label="Game ID"
              value={gameId}
              onChange={(e) => {
                setGameId(e.target.value);
              }}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Game Name"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Game Image"
              value={gameImage}
              onChange={(e) => {
                setGameImage(e.target.value);
              }}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => {
                setGameDescription(e.target.value);
              }}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Total Downloads"
              value={totalDownloads}
              onChange={(e) => {
                setTotalDownloads(e.target.value);
              }}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              select
              label=""
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
              SelectProps={{ native: true }}
            >
              <option value="">Select Game Type</option>
              {Type.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </TextField>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              addGame();
            }}
            style={{ width: "100%", margin: "20px 0" }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              updateGame();
            }}
            style={{ width: "100%", margin: "20px 0" }}
          >
            update
          </Button>
        </div>
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
            Book List
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
                        Game ID
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Game Name
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Game Image URL
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Description
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Games Type
                      </TableCell>
                      <TableCell style={{ width: "5%", height: "20px" }}>
                        Total downloads
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {games && games.length > 0 ? (
                      games.map((game) => (
                        <TableRow
                          key={game.gameId}
                          style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                        >
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameId}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameName}
                          </TableCell>
                          <TableCell
                            style={{
                              fontSize: "0.8rem",
                              maxWidth: "100px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {game.gameImage}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.description}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameType}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.totalDownloads}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => 
                                deleteGame(game.gameId)
                              }
                            >
                              Delete
                            </Button>
                            <Button
                              variant="outlined"
                              color="primary"
                              onClick={() => selectGameToUpdate(game.gameId)}
                            >
                              Update
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={10}>No Game available</TableCell>
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
