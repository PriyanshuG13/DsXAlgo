import React, {useEffect, useRef} from "react";
import styles from "/styles/sorting.module.css";
import {Animation} from "./Animation";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import Controller from "../../../components/controller/controller";

export default function Sorting() {
    const canvasRef = useRef(null);
    let canvas, context, barsArray

    useEffect(() => {
        canvas = canvasRef.current
        context = canvas.getContext('2d')
        barsArray = generateBars(context)
        Animation(context, barsArray)
    })

    return (
        <div>
            <Navbar/>
            <div className={styles.visualizer}>
                <VisualizerController/>
                <canvas ref={canvasRef} width="1350" height="600"/>
                <Controller/>
            </div>
            <Footer/>
        </div>
    );
}

function VisualizerController() {
    return (
        <div className={styles.controller}>
            Sorting Visualizer Controls
        </div>
    );
}

function generateBars(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    let bars = [];
    let gap = 20;
    for (let i = 0; i <= 43; ++i) {
        const height = Math.floor(Math.random() * (ctx.canvas.height - 50)) + 10;
        const barObject = {
            height: height,
            width: 20,
            x: gap,
            y: ctx.canvas.height - height - 30,
            color: "black",
            altColor: "deepskyblue",
            valueObject: {
                value: parseInt(`${height / 10}`),
                x: gap + 5,
                y: ctx.canvas.height - 15
            }
        }
        ctx.fillStyle = barObject.color;
        ctx.fillRect(barObject.x, barObject.y, barObject.width, barObject.height);
        ctx.fillText(barObject.valueObject.value.toString(), barObject.valueObject.x, barObject.valueObject.y);
        bars.push(barObject);
        gap += 30;
    }
    return bars
}
