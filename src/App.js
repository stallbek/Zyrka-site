import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./pages/Hero";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>} />
            </Routes>
        </div>
    );
};

export default App;