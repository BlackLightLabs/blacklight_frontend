import React from "react";
import Header from "../components/Hero";
import About from "../components/About";

function HomeScreen({color}) {
    return (
        <>
            <Header color={color}/>
            <About color={color}/>
        </>
    );
}

export default HomeScreen;