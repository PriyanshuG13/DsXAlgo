import styles from "/styles/linked_list.module.css";

export function Animations(i, n, idx) {
    const BG = document.getElementById(styles.Anime_container).style;
    BG.animationPlayState = "paused";

    function InsertA() {
        const heli = document.getElementById(styles.helicopter);
        const heliCar = document.getElementById(styles.heli_train);
        const bogie = document.getElementsByClassName(styles.train_car);
        const x=Math.round(bogie[idx].getBoundingClientRect().left-heli.getBoundingClientRect().left);
        console.log(`Left:${x}`);
        const kfHeli = [
            {left: "44vw", top: "-18vw", opacity: 1, offset: 0},
            {left: `${x}px`, top: "-4vw", opacity: 1, offset: .3},
            {left: `${x}px`, top: "0vw", opacity: 1, offset: .4},
            {left: `${x}px`, top: "0vw", opacity: 1, offset: .5},
            {left: `${x}px`, top: "-4vw", opacity: 1, offset: .6},
            {left: "-44vw", top: "-18vw", opacity: 1, offset: 1}
        ]
        const op = {
            duration: 10000,
            iterations: 1,
            animationTimingFunction: "linear",
        }
        heli.animate(kfHeli, op);
            heliCar.animate([
                {opacity: 1, offset: 0},
                {opacity: 1, offset: .5},
                {opacity: 0, offset: .51},
                {opacity: 0, offset: 1}
            ], op);
            bogie[idx].animate([
                {opacity: 0, offset: 0},
                {opacity: 0, offset: .5},
                {opacity: 1, offset: .51},
                {opacity: 1, offset: 1}
            ], op);
    }

    function DeleteA(){
        const heli = document.getElementById(styles.helicopter);
        const heliCar = document.getElementById(styles.heli_train);
        const bogie = document.getElementsByClassName(styles.train_car);
        const x=Math.round(bogie[idx].getBoundingClientRect().left-heli.getBoundingClientRect().left);
        console.log(`Left:${x}`);
        const kfHeli = [
            {left: "44vw", top: "-18vw", opacity: 1, offset: 0},
            {left: `${x}px`, top: "-4vw", opacity: 1, offset: .3},
            {left: `${x}px`, top: "0vw", opacity: 1, offset: .4},
            {left: `${x}px`, top: "0vw", opacity: 1, offset: .5},
            {left: `${x}px`, top: "-4vw", opacity: 1, offset: .6},
            {left: "-44vw", top: "-18vw", opacity: 1, offset: 1}
        ]
        const op = {
            duration: 10000,
            iterations: 1,
            animationTimingFunction: "linear",
        }
        heli.animate(kfHeli, op);
        heliCar.animate([
            {opacity: 0, offset: 0},
            {opacity: 0, offset: .5},
            {opacity: 1, offset: .51},
            {opacity: 1, offset: 1}
        ], op);
        bogie[idx].animate([
            {opacity: 1, offset: 0},
            {opacity: 1, offset: .5},
            {opacity: 0, offset: .51},
            {opacity: 0, offset: 1}
        ], op);
    }

    function moveTA() {
        const head = document.getElementById(styles.train_head);
        const tail = document.getElementById(styles.train_tail);
        const bogie = document.getElementsByClassName(styles.train_car);
        const kf = [
            {left: "100vw", offset: 0},
            {left: 0, offset: 1}
        ];
        const op = {
            duration: 8000,
            iterations: 1,
            animationTimingFunction: "linear",
        };
        head.animate(kf, op);
        for (let i = 0; i < n; ++i) {
            /*setTimeout(() => {
                bogie[i].animate(kf, op);
            }, i* 1000);*/
            bogie[i].animate(kf, op);
        }
        tail.animate(kf, op);
    }

    if (i === 1)
        InsertA()
    else if (i === 2)
        DeleteA()
    else if (i === 3)
        moveTA()
    setTimeout(() => {
        BG.animationPlayState = "running";
    }, 10000);
}
