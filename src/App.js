import React from 'react';
import {Route, Routes} from "react-router-dom";
import Hero from "./pages/Hero";
import Header from "./components/Header";
import Info from "./pages/Info";
import  "./pages/Guide";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/about" element={<Info/>} />
            </Routes>
            <Footer/>
            <Analytics />
        </div>
    );
};

export default App;