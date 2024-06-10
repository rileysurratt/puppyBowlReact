import React from "react";
import {Route, Routes} from "react-router-dom"
import AllPlayers from "../AllPlayers";
import SinglePlayer from "../SinglePlayer";
import HomePage from "../Home";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/players' element={<AllPlayers />} />
            <Route path='/player/:id' element={<SinglePlayer />} />
            <Route path='/addplayer' element={<h1>Create Player</h1>} />
            <Route path='/players/teams' element={<h1>Teams</h1>} />
        </Routes>
    )
}

export default Router;