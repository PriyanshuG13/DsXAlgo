export function BubbleSort(contextBackground, contextSwap, barsArray, speed) {
    let length = barsArray.length
    let animationFrameIdArray = [];
    let i = 0

    doBubbleSort()

    function doBubbleSort(){
        for (let i = 0; i < length - 1; ++i){
            setTimeout(() => {
                for (let j = 0; j < length-i-1 ; ++j) {
                    setTimeout(() => {
                        if(barsArray[j].height > barsArray[j+1].height) {
                            swapAnimation(barsArray[j], barsArray[j+1])
                        }
                    }, j * (1000/speed));
                }
            }, i * (length) * (1000/speed));
        }
    }

    function swapAnimation(bar1, bar2) {
        // if (props.paused) {} else
        if (i !== bar2.x-bar1.x) {
            clearBackground(contextBackground, bar1, bar2);
            swapAnimationFrame(contextSwap, bar1, bar2, i);
            i += speed;
            animationFrameIdArray.push(window.requestAnimationFrame(() => swapAnimation(bar1, bar2)));
        } else {
            i = 0;
            swap(bar1, bar2);
            colorChange(contextBackground, bar1, bar2, "black");
            clearBackground(contextSwap, bar1, bar2);
        }
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

    return animationFrameIdArray
}

