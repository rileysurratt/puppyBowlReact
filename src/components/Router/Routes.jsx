import React from "react";
import {Route, Routes} from "react-router-dom"
import AllPlayers from "../AllPlayers";
import SinglePlayer from "../SinglePlayer";
import HomePage from "../Home";
import AddPlayer from "../NewPlayerForm";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/players' element={<AllPlayers />} />
            <Route path='/player/:id' element={<SinglePlayer />} />
            <Route path='/addplayer' element={<AddPlayer />} />
        </Routes>
    )
}

export default Router;