// AllPlayers Layout & Home layout for now
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const AllPlayers = () => {
  const [players, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(players);

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
      {/* {loading ? (<h1>Loading Players...</h1>) : (
        <div className="grid grid-cols-3 gap-4">
            {players?.map((player) =>{
                return (
                    <div className="player" key={player.id}>
                        <h2>{player.name}</h2>
                    </div>
                )
            })}
        </div>
    )} */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default AllPlayers;
