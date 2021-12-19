import styles from "/styles/sorting.module.css";


const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';

export function QuickSort(Array, SPEED) {
    const ANIMATION_SPEED_MS = SPEED;
    const animations = getQuickSortAnimations(Array);
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
    }
}

function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(
    mainArray,
    startIdx,
    endIdx,
    animations,
) {
    if (startIdx < endIdx) {
        const pi = doPart(mainArray, startIdx, endIdx, animations);
        quickSortHelper(mainArray, startIdx, pi - 1, animations);
        quickSortHelper(mainArray, pi + 1, endIdx, animations);
    }
}

function doPart(
    mainArray,
    startIdx,
    endIdx,
    animations,
) {

    let pivot = mainArray[endIdx];
    let i = (startIdx - 1);
    for (let j = startIdx; j < endIdx; j++) {
        if (mainArray[j] < pivot) {
            i++;
            let temp = mainArray[i];
            mainArray[i] = mainArray[j];
            mainArray[j] = temp;
            animations.push([[i, j], [1]]);
            animations.push([[i, j], [2]]);
            animations.push([[[i, mainArray[i]], [j, mainArray[j]]], [3]]);
        }
    }
    let temp = mainArray[i + 1];
    mainArray[i + 1] = mainArray[endIdx];
    mainArray[endIdx] = temp;
    animations.push([[i + 1, endIdx], [1]]);
    animations.push([[i + 1, endIdx], [2]]);
    animations.push([[[i + 1, mainArray[i + 1]], [endIdx, mainArray[endIdx]]], [3]]);
    return i + 1;
}

