import React from "react";
import Header from "../components/Hero";
import About from "../components/About";
import Ethics from "../components/Ethics";

function HomeScreen({color}) {
    return (
        <>
            <Header color={color}/>
            <About color={color}/>
            <Ethics color={color}/>
        </>
    );
}

export default HomeScreen;