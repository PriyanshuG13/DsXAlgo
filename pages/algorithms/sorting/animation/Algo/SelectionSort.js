import styles from "/styles/sorting.module.css";

const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';

export function SelectionSort(Array, SPEED) {
    const ANIMATION_SPEED_MS = SPEED;
    const animations = getSelectionSortAnimations(Array);
    for (let i = 0; i < animations.length; i++) {
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

function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, array.length, animations);
    return animations;
}

function selectionSortHelper(
    mainArray,
    n,
    animations
) {
    let i, j, min;
    for (i = 0; i < n - 1; ++i) {
        min = i;
        for (j = i + 1; j < n; ++j) {
            animations.push([[min, j], [1]]);
            animations.push([[min, j], [2]]);
            if (mainArray[j] < mainArray[min])
                min = j;
        }
        let temp = mainArray[min];
        mainArray[min] = mainArray[i];
        mainArray[i] = temp;
        animations.push([[min, j], [1]]);
        animations.push([[min, j], [2]]);
        animations.push([[[min, mainArray[min]], [i, mainArray[i]]], [3]]);
        animations.push([[i], [4]])
    }
    animations.push([[i], [4]])
}
