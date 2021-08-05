import React from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";

export default function Array() {
    return(
        <div>
            <Navbar/>
            <ArrayVisualizer/>
            <ArrayVisualizerControls/>
            <Footer/>
        </div>
    );
}

function ArrayVisualizer(){
    return(
        <div>
            Array Visualizer
        </div>
    );
}

function ArrayVisualizerControls(){
    return(
        <div>
            Array Visualizer Controls
        </div>
    );
}
