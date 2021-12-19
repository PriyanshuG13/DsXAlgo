import styles from "/styles/sorting.module.css";

const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';
let ANIMATION_SPEED_MS

export function BubbleSort(Array, SPEED) {
    ANIMATION_SPEED_MS = SPEED * 0.5;
    const animations = getBubbleSortAnimations(Array);
    for (let i = 0; i < animations.length; ++i) {
        const [[], [idx]] = animations[i];
        const arrayBars = document.getElementsByClassName(styles.array_bar);
        if (idx === 1) {
            const [[barOneIdx, barTwoIdx], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
            continue;
        }
        if (idx === 2) {
            const [[barOneIdx, barTwoIdx], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
            continue;
        }
        if (idx === 3) {
            const [[[barOneIdx, oneHeight], [barTwoIdx, twoHeight]], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${oneHeight / 15}vw`;
                barTwoStyle.height = `${twoHeight / 15}vw`;
            }, i * (ANIMATION_SPEED_MS));
            continue;
        }
        if (idx === 4) {
            const [[barOneIdx], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = FINAL_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
        /*const arrayBar = document.getElementById(styles.array_bar);
        const kf = [
            {left: "-100vw", offset: 0},
            {left: 0, offset: 1}
        ];
        const op = {
            duration: 10000,
            iterations: 1,
            animationTimingFunction: "linear",
        };
        arrayBar.animate(kf, op);*/
    }
}

function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(
    mainArray,
    n,
    animations
) {
    let i, j;
    for (i = 0; i < n - 1; ++i) {
        for (j = 0; j < n - i - 1; ++j) {
            if (mainArray[j] > mainArray[j + 1]) {
                let temp = mainArray[j];
                mainArray[j] = mainArray[j + 1];
                mainArray[j + 1] = temp;
                animations.push([[j, j + 1], [1]]);
                animations.push([[j, j + 1], [2]]);
                animations.push([[[j, mainArray[j]], [j + 1, mainArray[j + 1]]], [3]]);
            }
        }
        animations.push([[j], [4]])
    }
    animations.push([[0], [4]])
}
