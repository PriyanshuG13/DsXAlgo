import React from "react";

export function Animation(context, barsArray) {
    let animationFrameId, bar1, bar2
    let i = 0

    function swapAnimation() {
        // if (false) {} else
        if (i !== bar2.x-bar1.x) {
            swapAnimationFrame(context, bar1, bar2, i);
            i += 1
            animationFrameId = window.requestAnimationFrame(swapAnimation);
        } else {
            i = 0;
            swap(bar1, bar2);
            colorChange(context, bar1, bar2);
        }
    }

    function colorChange(ctx, bar1, bar2) {
        ctx.clearRect(bar1.x - 1, 0, 22, ctx.canvas.height)
        ctx.clearRect(bar2.x - 1, 0, 22, ctx.canvas.height)
        ctx.fillStyle = bar1.color;
        ctx.fillRect(bar1.x, bar1.y, bar1.width, bar1.height);
        ctx.fillRect(bar2.x, bar2.y, bar2.width, bar2.height);
        ctx.fillText(bar1.valueObject.value.toString(), bar1.valueObject.x, bar1.valueObject.y);
        ctx.fillText(bar2.valueObject.value.toString(), bar2.valueObject.x, bar2.valueObject.y);
    }

    function swapAnimationFrame(ctx, bar1, bar2, i) {
        ctx.clearRect(bar1.x - 1, 0, 30, ctx.canvas.height)
        ctx.clearRect(bar2.x - 1, 0, 30, ctx.canvas.height)
        ctx.fillStyle = bar1.altColor;
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

    for (let i = 1; i < barsArray.length; ++i) {
        setTimeout(async () => {
            bar1 = barsArray[i -1]
            bar2 = barsArray[i]
            if(bar1.valueObject.value > bar2.valueObject.value){
                swapAnimation()
            }
        }, i * 1000);
    }

    return window.cancelAnimationFrame(animationFrameId)
}
