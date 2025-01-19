import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import Info from "./pages/Info";
import FAQ from "./pages/FAQ";
import Guide from "./pages/Guide";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/about" element={<Info/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/guide" element={<Guide/>} />
            </Routes>
        </div>
    );
};

export default App;