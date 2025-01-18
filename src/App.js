import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import Info from "./pages/Info";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/info" element={<Info/>} />
            </Routes>
        </div>
    );
};

export default App;