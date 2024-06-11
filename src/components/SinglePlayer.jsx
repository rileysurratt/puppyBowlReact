// Single Player View
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const SinglePlayer = () => {
  const [player, setPlayer] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Player not found");
        }
        setPlayer(result.data.player);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
    }
    getData();
  }, []);
  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : player ? (
        <>
          <Card justify-center className="m-auto" sx={{ maxWidth: 450 }}>
            <CardMedia
              sx={{ height: 400 }}
              image={player.imageUrl}
              alt={player.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" className="playerName" component="div">
                {player.name}
              </Typography>
              <Typography variant="h6" className="playerInfo">
                ID #: {player.id}
              </Typography>
              <Typography variant="h6" className="playerInfo">
                Breed: {player.breed}
              </Typography>
              <Link to="/players">
            <Button color="success" className="back-button">Back to Players</Button>
          </Link>
            </CardContent>
          </Card>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default SinglePlayer;


