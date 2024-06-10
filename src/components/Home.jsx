import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="home-page">Welcome to Puppy Bowl!</h1>
      <h3 className="home-page">
        Find all information and puppy rosters
         <Link to="/players" underline="hover">
          here
        </Link>
      </h3>
    </>
  );
};

export default HomePage;
