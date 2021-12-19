import styles from "/styles/sorting.module.css";

const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';

export function MergeSort(Array, SPEED) {
    const ANIMATION_SPEED_MS = SPEED;
    const animations = getMergeSortAnimations(Array);
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
        }
        if (idx === 2) {
            const [[barOneIdx, barTwoIdx], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
        if (idx === 3) {
            const [[barOneIdx, newHeight], []] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
                barOneStyle.height = `${newHeight / 15}vw`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
}

function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([[i, j], [1]]);
        animations.push([[i, j], [2]]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([[k, auxiliaryArray[i]], [3]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([[k, auxiliaryArray[j]], [3]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([[i, i], [1]]);
        animations.push([[i, i], [2]]);
        animations.push([[k, auxiliaryArray[i]], [3]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        animations.push([[j, j], [1]]);
        animations.push([[j, j], [2]]);
        animations.push([[k, auxiliaryArray[j]], [3]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}
