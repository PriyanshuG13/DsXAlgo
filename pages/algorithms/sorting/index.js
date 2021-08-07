import React, {useEffect, useRef} from "react";
import styles from "/styles/sorting.module.css";
import {Animation} from "./Animation";
import Navbar from "/components/navbar/navbar";
import Footer from "/components/footer/footer";
import Controller from "/components/controller/controller";

export default function Sorting() {
    const [paused, setPause] = React.useState(false);
    const [value, setValue] = React.useState(100);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const playPause = () => setPause(!paused)

    return (
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <div className={styles.controller}>
                    <button onClick={() => location.reload()}>Generate New</button>
                    <button onClick={() => location.reload()}>Bubble Sort</button>
                    <button onClick={() => location.reload()}>Insertion Sort</button>
                    <button onClick={() => location.reload()}>Selection Sort</button>
                    <button onClick={() => location.reload()}>Quick Sort</button>
                    <button onClick={() => location.reload()}>Merge Sort</button>
                    <button onClick={() => location.reload()}>Heap Sort</button>
                </div>
                <Animation paused={paused} value={value/10}/>
                <Controller playPause={playPause}
                            paused={paused}
                            value={value}
                            handleChange={handleChange}/>
            </div>
            <Footer/>
        </div>
    );
}


