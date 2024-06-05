import React from "react";
import {Route, Routes} from "react-router-dom"
import AllPlayers from "../AllPlayers";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/players" element={<AllPlayers />} />
            <Route path="/" element={<h1>Teams</h1>} />
        </Routes>
    )
}

export default Router;