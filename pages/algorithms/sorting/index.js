import React from "react";
import styles from "/styles/sorting.module.css";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Controller from "../../../components/controller/controller";
import Visualizer from "./Animation";

export default function Sorting() {
    const [paused, setPause] = React.useState(false);
    const [play, setPlay] = React.useState(true);

    const pause = () =>{
        if(!paused){
            setPause(true)
        }
    }

    return(
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <VisualizerController/>
                <Visualizer paused={paused}/>
                <Controller pause={pause}/>
            </div>
            <Footer/>
        </div>
    );
}

function VisualizerController(){
    return(
        <div className={styles.controller}>
            Sorting Visualizer Controls
        </div>
    );
}
