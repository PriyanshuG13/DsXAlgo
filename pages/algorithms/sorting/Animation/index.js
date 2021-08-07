import React, {useRef, useEffect} from "react";

export default function Visualizer(props) {
    const canvasRef = useRef(null)
    const {paused} = props

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId
        let barsArray = generateBars(context)
        let i = 0
        let bar1, bar2

        const swapAnimation = () => {
            if (paused) {}
            else if (i !== 30) {
                console.log("animation:",bar1, bar2)
                swapAnimationFrame(context, bar1, bar2, i++)
                animationFrameId = window.requestAnimationFrame(swapAnimation)
            } else {
                i = 0
            }
        }

        for (let i = 0; i < 2; ++i) {
            setTimeout(async () => {
                bar1 = barsArray[i]
                bar2 = barsArray[i + 1]
                await swapAnimation()
                console.log("Before:",bar1, bar2)
                await swap(bar1, bar2)
                console.log("After:",bar1, bar2)
            }, i * 1000);
        }

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    })

    return (
        <canvas ref={canvasRef} width="1350" height="600"/>
    );
}

const generateBars = (ctx) => {
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
            valueObject: {
                value: parseInt(`${height / 10}`),
                x: gap + 5,
                y: ctx.canvas.height - 15
            }
        }
        ctx.fillStyle = "black";
        ctx.fillRect(barObject.x, barObject.y, barObject.width, barObject.height);
        ctx.fillText(barObject.valueObject.value.toString(), barObject.valueObject.x, barObject.valueObject.y);
        bars.push(barObject);
        gap += 30;
    }
    return bars
}

const swapAnimationFrame = (ctx, bar1, bar2, i) => {
    ctx.clearRect(bar1.x - 1, 0, bar2.x - bar1.x + 21, ctx.canvas.height)
    ctx.fillRect(bar1.x + i, bar1.y, bar1.width, bar1.height);
    ctx.fillRect(bar2.x - i, bar2.y, bar2.width, bar2.height);
    ctx.fillText(bar1.valueObject.value.toString(), bar1.valueObject.x + i, bar1.valueObject.y);
    ctx.fillText(bar2.valueObject.value.toString(), bar2.valueObject.x - i, bar2.valueObject.y);
}

const swap = (bar1, bar2) => {
    const temp = {height: bar1.height, y: bar1.y, value: bar1.valueObject.value}
    bar1.height = bar2.height
    bar1.y = bar2.y
    bar1.valueObject.value = bar2.valueObject.value
    bar2.height  = temp.height
    bar2.y  = temp.y
    bar2.valueObject.value = temp.value
}
