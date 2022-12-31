import React from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
export default function App(){
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/nav" element={<Nav/>}/>
                <Route path="/" element={<Login/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}