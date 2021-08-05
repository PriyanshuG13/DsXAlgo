import React from "react";
import styles from "/styles/sorting.module.css";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Controller from "../../../components/controller/controller";

export default function Sorting() {
    return(
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <VisualizerController/>
                <VisualizerAnimations/>
                <Controller/>
            </div>
            <Footer/>
        </div>
    );
}

function VisualizerAnimations(){
    return(
        <canvas>
        </canvas>
    );
}

function VisualizerController(){
    return(
        <div className={styles.controller}>
            Sorting Visualizer Controls
        </div>
    );
}
