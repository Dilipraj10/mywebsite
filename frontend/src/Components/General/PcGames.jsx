import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PcGames = () => {
  const [games, setGames] = useState([]);
  const [type,setType] = useState("Pc game")

  useEffect(() => {
    getGames();
  }, []);

  const getGames = () => {
    axios
      .get(`http://localhost:8080/api/gaming/getgames?gameType=${type}`)
      .then((res) => {
        console.log(res.data.data);
        setGames(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <Navbar/>
    <div
      style={{
        display: "grid",
        gap: "35px",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 270px))",
        margin: "25px",
      }}
    >
      {games.map((game, index) => (
        <Card
          key={index}
          style={{
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            height: "350px",
            width: "280px",
          }}
        >
          <CardMedia
            style={{ height: "200px" }}
            image={game.gameImage}
            title={game.gameName}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.gameName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game.gameType}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 1,
            }}
          >
            <CardActions>
              <Button size="small">
                <FavoriteBorderIcon />
              </Button>
              <Button size="small">Download</Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default PcGames;
