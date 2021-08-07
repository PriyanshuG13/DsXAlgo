import React, {useEffect, useRef, useState} from "react";

export function Animation(props) {
    const [once, setOnce] = useState(true)
    const canvasBackgroundRef = useRef(null);
    const canvasSwapRef = useRef(null);
    const {paused, value} = props
    let canvasBackground, canvasSwap, contextBackground,contextSwap
    let animationFrameId, bar1, bar2, barsArray, length, speed
    let i = 0

    useEffect(() => {
        if(once){
            setOnce(false)
            canvasBackground = canvasBackgroundRef.current
            canvasSwap = canvasSwapRef.current
            contextBackground = canvasBackground.getContext('2d')
            contextSwap = canvasSwap.getContext('2d')
            barsArray = generateBars(contextBackground)
            length = barsArray.length
        }
        speed = value
        bubbleSort()
        return()=>{
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [paused, value])

    function bubbleSort(){
        for (let i = 0; i < length - 1; ++i){
            setTimeout(() => {
                for (let j = 0; j < length-i-1 ; ++j) {
                    setTimeout(() => {
                        bar1 = barsArray[j]
                        bar2 = barsArray[j+1]
                        if(bar1.valueObject.value > bar2.valueObject.value) {
                            swapAnimation()
                        }
                    }, j * (1000/speed));
                }
            }, i * (length) * (1000/speed));
        }
    }

    function swapAnimation() {
        // if (props.paused) {} else
        if (i !== bar2.x-bar1.x) {
            clearBackground(contextBackground, bar1, bar2)
            swapAnimationFrame(contextSwap, bar1, bar2, i);
            i += speed
            animationFrameId = window.requestAnimationFrame(swapAnimation);
        } else {
            i = 0;
            swap(bar1, bar2);
            colorChange(contextBackground, bar1, bar2, "black");
            clearBackground(contextSwap, bar1, bar2)
        }
    }

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

function clearBackground(ctx, bar1, bar2){
    ctx.clearRect(bar1.x - 1, 0, 30, ctx.canvas.height)
    ctx.clearRect(bar2.x - 1, 0, 30, ctx.canvas.height)
}

function colorChange(ctx, bar1, bar2, color) {
    ctx.clearRect(bar1.x - 1, 0, 22, ctx.canvas.height)
    ctx.clearRect(bar2.x - 1, 0, 22, ctx.canvas.height)
    ctx.fillStyle = color;
    ctx.fillRect(bar1.x, bar1.y, bar1.width, bar1.height);
    ctx.fillRect(bar2.x, bar2.y, bar2.width, bar2.height);
    ctx.fillText(bar1.valueObject.value.toString(), bar1.valueObject.x, bar1.valueObject.y);
    ctx.fillText(bar2.valueObject.value.toString(), bar2.valueObject.x, bar2.valueObject.y);
}

function swapAnimationFrame(ctx, bar1, bar2, i) {
    ctx.clearRect(bar1.x - 1, 0, bar2.x-bar1.x+21, ctx.canvas.height)
    ctx.fillStyle = "deepskyblue";
    ctx.fillRect(bar1.x + i, bar1.y, bar1.width, bar1.height);
    ctx.fillRect(bar2.x - i, bar2.y, bar2.width, bar2.height);
    ctx.fillText(bar1.valueObject.value.toString(), bar1.valueObject.x + i, bar1.valueObject.y);
    ctx.fillText(bar2.valueObject.value.toString(), bar2.valueObject.x - i, bar2.valueObject.y);
}

function swap(bar1, bar2) {
    const temp = {height: bar1.height, y: bar1.y, value: bar1.valueObject.value}
    bar1.height = bar2.height
    bar1.y = bar2.y
    bar1.valueObject.value = bar2.valueObject.value
    bar2.height  = temp.height
    bar2.y  = temp.y
    bar2.valueObject.value = temp.value
}
