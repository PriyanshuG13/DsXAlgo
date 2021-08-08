import React from "react";
import styles from "/styles/sorting.module.css";
import Animation from "./Animation";
import Navbar from "/components/navbar/navbar";
import Footer from "/components/footer/footer";
import Controller from "/components/controller/controller";

export default function Sorting() {
    const [paused, setPause] = React.useState(true);
    const [sort, setSort] = React.useState(0);
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
                    <button onClick={() => setSort(1)}>Bubble Sort</button>
                    <button onClick={() => setSort(2)}>Insertion Sort</button>
                    <button onClick={() => setSort(3)}>Selection Sort</button>
                    <button onClick={() => setSort(4)}>Quick Sort</button>
                    <button onClick={() => setSort(5)}>Merge Sort</button>
                    <button onClick={() => setSort(6)}>Heap Sort</button>
                </div>
                <Animation paused={paused} value={value/10} sort={sort}/>
                <Controller playPause={playPause}
                            paused={paused}
                            value={value}
                            handleChange={handleChange}/>
            </div>
            <Footer/>
        </div>
    );
}


