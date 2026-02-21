import React from 'react'
import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import ProductViewer from "./Components/ProductViewer.jsx";
import gsap from "gsap";
import {ScrollTrigger } from  "gsap/all";
import Showcase from "./Components/Showcase.jsx";
import Performance from "./Components/performance.jsx";
import Featrues from "./Components/Featrues.jsx";
import Highlights from "./Components/Highlights.jsx";
import Footer from "./Components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Featrues />
            <Highlights />
            <Footer />
        </main>
    )
}
export default App
