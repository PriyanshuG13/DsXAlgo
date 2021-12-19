import React, {useEffect} from "react";
import styles from "/styles/sorting.module.css";
import Animation from "./animation";
import Navbar from "/components/navbar/navbar";
import Footer from "/components/footer/footer";
import Controller from "/components/controller/controller";

export default function Sorting() {
    const [paused, setPause] = React.useState(true);
    const [sort, setSort] = React.useState(0);
    const [value, setValue] = React.useState(100);
    const bubble = React.useRef(null);
    const insertion = React.useRef(null);
    const selection = React.useRef(null);
    const quick = React.useRef(null);
    const merge = React.useRef(null);
    const heap = React.useRef(null);
    let disable = true;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        disableButtons();
    },[sort]);

    const disableButtons = () => {
        disable = !disable
        bubble.current.disabled = disable
        insertion.current.disabled = disable
        selection.current.disabled = disable
        quick.current.disabled = disable
        merge.current.disabled = disable
        heap.current.disabled = disable
    }

    const playPause = () => setPause(!paused)

    return (
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <div className={styles.controller}>
                    <button onClick={() => location.reload()}>Generate New</button>
                    <button ref={bubble} onClick={() => setSort(1)}>Bubble Sort</button>
                    <button ref={insertion} onClick={() => setSort(2)}>Insertion Sort</button>
                    <button ref={selection} onClick={() => setSort(3)}>Selection Sort</button>
                    <button ref={quick} onClick={() => setSort(4)}>Quick Sort</button>
                    <button ref={merge} onClick={() => setSort(5)}>Merge Sort</button>
                    <button ref={heap} onClick={() => setSort(6)}>Heap Sort</button>
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


