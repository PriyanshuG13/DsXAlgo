import styles from '/styles/array.module.css';

export function Animations(sel,idx,dif) {
    const boxVal = document.getElementById(`Val${idx}`);
    const boxRemove = document.getElementById(styles.valRemove);
    const boxMove = document.getElementById(styles.valMove);
    const box=document.getElementsByClassName(styles.array_box);
    const Circle=document.getElementById(styles.Circle);
    const boxKf=[
        {offset: 0},
        {fontSize:"1.5vw",border:"solid 10px red", offset: .5},
        {offset: 1}
    ]
    const boxOp={
        duration: 1000,
        delay:1800,
        iterations: 1,
        animationTimingFunction: "ease-in-out",
    }

    function Insert(){
        const x=boxVal.getBoundingClientRect().x-boxMove.getBoundingClientRect().x;
        const y=boxVal.getBoundingClientRect().y-boxMove.getBoundingClientRect().y;
        const kfbm = [
            {left:"0vw",top:"0vw", offset: 0},
            {left:`${x}px`,top:`${y}px`, offset: 1}
        ]
        const op = {
            duration: 1000,
            iterations: 1,
            animationTimingFunction: "linear",
        }
        boxMove.animate(kfbm,op);
        boxVal.animate([
            {opacity: 0, offset: 0},
            {opacity: 0, offset: .98},
            {opacity: 1, offset: 1}
        ], op)
        moveCircle();
    }
    function Delete(){
        box[idx+dif].style.overflow="visible";
        const x=boxRemove.getBoundingClientRect().x-boxVal.getBoundingClientRect().x;
        const y=boxRemove.getBoundingClientRect().y-boxVal.getBoundingClientRect().y;
        console.log(boxVal.getBoundingClientRect())
        const kfbm = [
            {left:"0vw",top:"0vw", offset: 0},
            {left:`${x}px`,top:`${y}px`,opacity:"1", offset: .8},
            {left:`${x}px`,top:`${y}px`,opacity:"0", offset: 1}
        ]
        const op = {
            duration: 1200,
            iterations: 1,
            animationTimingFunction: "linear",
        }
        boxVal.animate(kfbm,op);
        moveCircle();
    }

    function moveCircle(){
        const IDX=document.getElementById(`Idx${idx}`);
        if(dif===4){
            const Top=document.getElementById(`Top`);
            const x1=Top.getBoundingClientRect().x-Circle.getBoundingClientRect().x;
            const y1=Top.getBoundingClientRect().y-Circle.getBoundingClientRect().y;
            const x2=IDX.getBoundingClientRect().x-Circle.getBoundingClientRect().x;
            const y2=IDX.getBoundingClientRect().y-Circle.getBoundingClientRect().y;
            const kfcir = [
                {width:"3.5vw",height:"3.5vw",left:`${x1}px`,top:`${y1}px`,opacity:1, offset: 0},
                {width:"3.5vw",height:"3.5vw",left:`${x1}px`,top:`${y1}px`,opacity:1, offset: .3},
                {width:"3vw",height:"3vw",left:`${x2}px`,top:`${y2}px`,opacity:1, offset: .7},
                {width:"3vw",height:"3vw",left:`${x2}px`,top:`${y2}px`,opacity:1, offset: 1}
            ]
            const op = {
                duration: 2000,
                delay:500,
                iterations: 1,
                animationTimingFunction: "linear",
            }
            box[2].animate(boxKf, boxOp);
            if(sel===1){
                setTimeout(() => {
                    Circle.animate(kfcir,op);
                }, 500)
            }else if(sel===2){
                setTimeout(() => {
                    Circle.animate(kfcir,op);
                }, 2500)
            }
        }
        else if(dif===5){
            const Head=document.getElementById(`Head`);
            const Tail=document.getElementById(`Tail`);
            const x1=Head.getBoundingClientRect().x-Circle.getBoundingClientRect().x;
            const y1=Head.getBoundingClientRect().y-Circle.getBoundingClientRect().y;
            const x2=Tail.getBoundingClientRect().x-Circle.getBoundingClientRect().x;
            const y2=Tail.getBoundingClientRect().y-Circle.getBoundingClientRect().y;
            const x=IDX.getBoundingClientRect().x-Circle.getBoundingClientRect().x;
            const y=IDX.getBoundingClientRect().y-Circle.getBoundingClientRect().y;
            const kfh = [
                {width:"3.5vw",height:"3.5vw",left:`${x1}px`,top:`${y1}px`,opacity:1, offset: 0},
                {width:"3.5vw",height:"3.5vw",left:`${x1}px`,top:`${y1}px`,opacity:1, offset: .3},
                {width:"3vw",height:"3vw",left:`${x}px`,top:`${y}px`,opacity:1, offset: .7},
                {width:"3vw",height:"3vw",left:`${x}px`,top:`${y}px`,opacity:1, offset: 1}
            ]
            const kft = [
                {width:"3.5vw",height:"3.5vw",left:`${x2}px`,top:`${y2}px`,opacity:1, offset: 0},
                {width:"3.5vw",height:"3.5vw",left:`${x2}px`,top:`${y2}px`,opacity:1, offset: .3},
                {width:"3vw",height:"3vw",left:`${x}px`,top:`${y}px`,opacity:1, offset: .7},
                {width:"3vw",height:"3vw",left:`${x}px`,top:`${y}px`,opacity:1, offset: 1}
            ]
            const op = {
                duration: 2000,
                delay:500,
                iterations: 1,
                animationTimingFunction: "linear",
            }
            if(sel===1){
                box[3].animate(boxKf, boxOp);
                setTimeout(() => {
                    Circle.animate(kft,op);
                }, 500)
            }else if(sel===2){
                box[2].animate(boxKf, boxOp);
                setTimeout(() => {
                    Circle.animate(kfh,op);
                }, 500)
            }
        }
    }
    if(sel===1)
        Insert();
    else if(sel===2)
        Delete();
}
