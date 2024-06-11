// NewPlayerForm Layout
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const AddPlayer = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    // prevents reloading
    event.preventDefault();
    const playerObj = { name, breed, status, imageUrl };
    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(playerObj),
        }
      );
      const result = await response.json();
      alert("You have successfully added", { name });
      setName("");
      setBreed("");
      setStatus("");
      setImageUrl("");
      return result;
    } catch (error) {
      console.error(
        "There was an error adding your player! Try again later ;("
      );
    }
  };
  return (
    <>
      <Box
        component="form"
        className="addPlayerForm"
        sx={{
          "& > :not(style)": { m: 1, width: "40ch" },
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography>Add your pup to the Puppy Bowl Roster!</Typography>
        <TextField
          color="success"
          id="standard-basic"
          variant="standard"
          label="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          color="success"
          id="standard-basic"
          variant="standard"
          label="Breed"
          value={breed}
          onChange={(event) => {
            setBreed(event.target.value);
          }}
        />
        <FormControl sx={{ m: 1, minWidth: 80 }} color="success">
          <InputLabel id="demo-simple-select-autowidth-label">
            Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            variant="standard"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            autoWidth
            label="Status"
          >
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            <MenuItem>field</MenuItem>
            <MenuItem>bench</MenuItem>
          </Select>
        </FormControl>
        <TextField
          color="success"
          id="standard-basic"
          variant="standard"
          label="Image Link"
          value={imageUrl}
          onChange={(event) => {
            setImageUrl(event.target.value);
          }}
        />
        <Button color="success" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};
export default AddPlayer;
