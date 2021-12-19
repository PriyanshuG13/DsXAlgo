import React, {useEffect, useRef, useState} from "react";
import {BubbleSort} from "./algorithm/bubbleSort";
import {InsertionSort} from "./algorithm/insertionSort";
import {SelectionSort} from "./algorithm/selectionSort";
import {QuickSort} from "./algorithm/quickSort";
import {MergeSort} from "./algorithm/mergeSort";
import {HeapSort} from "./algorithm/heapSort";

export default function Animation(props) {
    const [once, setOnce] = useState(true)
    const [barsArray, setArray] = useState([])
    const canvasBackgroundRef = useRef(null);
    const canvasSwapRef = useRef(null);
    const {paused, value, sort} = props
    let canvasBackground, canvasSwap, contextBackground, contextSwap
    let animationFrameIdArray, length, speed

    const sortSelecter = () => {
        if(!paused){
            if(sort === 1){
                animationFrameIdArray = BubbleSort(contextBackground, contextSwap, barsArray, speed);
            } else if(sort === 2){
                animationFrameIdArray = InsertionSort(contextBackground, contextSwap, barsArray, speed);
            } else if(sort === 3){
                animationFrameIdArray = SelectionSort(contextBackground, contextSwap, barsArray, speed);
            } else if(sort === 4){
                animationFrameIdArray = QuickSort(contextBackground, contextSwap, barsArray, speed);
            } else if(sort === 5){
                animationFrameIdArray = MergeSort(contextBackground, contextSwap, barsArray, speed);
            } else if(sort === 6){
                animationFrameIdArray = HeapSort(contextBackground, contextSwap, barsArray, speed);
            }
        }
    }

    useEffect(() => {
        canvasBackground = canvasBackgroundRef.current
        canvasSwap = canvasSwapRef.current
        contextBackground = canvasBackground.getContext('2d')
        contextSwap = canvasSwap.getContext('2d')
        if(once){
            setOnce(false)
            setArray(generateBars(contextBackground))
        }
        length = barsArray.length
        speed = value
        sortSelecter()
        // return()=>{
        //     window.cancelAnimationFrame(animationFrameIdArray[0])
        // }
    }, [paused, value, sort])

    return (
        <div>
            <canvas ref={canvasBackgroundRef} width="1350" height="600"/>
            <canvas ref={canvasSwapRef} style={{position:"absolute", left:27}} width="1350" height="600"/>
        </div>
    );
}

function generateBars(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    let bars = [];
    let gap = 20;
    for (let i = 0; i <= 43; ++i) {
        const height = Math.round(Math.floor(Math.random() * (ctx.canvas.height - 50)) + 10);
        const barObject = {
            height: height,
            width: 20,
            x: gap,
            y: ctx.canvas.height - height - 30,
            valueObject: {
                value: Math.round(height / 5.5),
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
