import React, { useRef, useEffect } from "react";

export default function Visualizer(props) {
    const canvasRef = useRef(null)
    const {paused} = props

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationFrameId
        let barsArray = generateBars(context)
        console.log(barsArray)
        let i = 0
        let bar1,bar2

        const swapAnimation = () => {
            if(paused){return;}
            swapAnimationFrame(context, bar1, bar2, i++)
            if(i!==30){
                animationFrameId = window.requestAnimationFrame(swapAnimation)
            }else{
                i = 0
            }
        }
        // if(bar1.valueObject.value > bar2.valueObject.value) {
        //     render()
        // }

        for(let i = 0; i<10; ++i){
            setTimeout(()=>{
                bar1 = barsArray[i]
                bar2 = barsArray[i+1]
                swapAnimation()
            },i*1000);
        }


        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    })

    return(
        <canvas ref={canvasRef} width="1350" height="600"/>
    );
}

const generateBars = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    let bars = [];
    let gap = 20;
    for(let i = 0; i<=43; ++i){
        const height = Math.floor(Math.random() * (ctx.canvas.height-50)) + 10;
        const barObject = {
            height: height,
            width:20,
            x: gap,
            y: ctx.canvas.height-height-30,
            valueObject: {
                value: parseInt(`${height/10}`),
                x: gap+5,
                y: ctx.canvas.height-15
            }
        }
        ctx.fillStyle = "black";
        ctx.fillRect(barObject.x,barObject.y, barObject.width, barObject.height);
        ctx.fillText(barObject.valueObject.value.toString(), barObject.valueObject.x, barObject.valueObject.y);
        bars.push(barObject);
        gap += 30;
    }
    return bars
}

const swapAnimationFrame = (ctx, bar1, bar2, i) => {
    ctx.clearRect(bar1.x-1, 0, bar2.x-bar1.x+21, ctx.canvas.height)
    ctx.fillRect(bar1.x+i, bar1.y, bar1.width, bar1.height);
    ctx.fillRect(bar2.x-i, bar2.y, bar2.width, bar2.height);
    ctx.fillText(bar1.valueObject.value.toString(), bar1.valueObject.x+i, bar1.valueObject.y);
    ctx.fillText(bar2.valueObject.value.toString(), bar2.valueObject.x-i, bar2.valueObject.y);
}

// const swap = (arr, i, j) => {
//     const temp = {height: arr[i]['height'], value: arr[i].valueObject.value}
//     arr[i]['height'] = arr[j].height
//     arr[i]['valueObject']['value'] = arr[j].valueObject.value
//     arr[j]['height'] = temp.height
//     arr[j]['valueObject']['value'] = temp.value
// }
