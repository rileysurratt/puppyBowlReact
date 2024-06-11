// AllPlayers Layout & Home layout for now
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Card Layout
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeletePlayer from "./DeletePlayer";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Stack from "@mui/material/Stack";

const AllPlayers = () => {
  const [players, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players"
        );
        const result = await response.json();
        setAllPlayers(result.data.players);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getData();
  }, []);
  return (
    <>
      <Typography className="header">Puppy Bowl Participants</Typography>
      {loading ? (
        <h1>Loading Players...</h1>
      ) : (
        <div className="grid-container">
          {filteredPlayers?.map((player) => {
            return (
              <div className="grid-item mt-16" key={player.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt={player.name}
                    height="140"
                    image={player.imageUrl}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {player.name}
                    </Typography>
                    <Typography variant="body2" color="text.success">
                      PUPPY ID: {player.id}
                    </Typography>
                    <Typography variant="body2" color="text.success">
                      BREED: {player.breed}
                    </Typography>
                  </CardContent>
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                  >
                    <CardActions>
                      <Button
                        size="small"
                        color="success"
                        onClick={() => navigate(`/player/${player.id}`)}
                        startIcon={<InfoOutlinedIcon />}
                      >
                        DETAILS
                      </Button>
                      <Button
                        size="small"
                        color="success"
                        onClick={() => {
                          return DeletePlayer(player.id);
                        }}
                        startIcon={<DeleteOutlineOutlinedIcon />}
                      >
                        DELETE PLAYER
                      </Button>
                    </CardActions>
                  </Stack>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllPlayers;
