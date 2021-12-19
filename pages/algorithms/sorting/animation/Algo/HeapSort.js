import styles from "/styles/sorting.module.css";

const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';

export function HeapSort(Array, SPEED) {
    const ANIMATION_SPEED_MS = SPEED;
    const animations = getHeapSortAnimations(Array);
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

function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, array.length, animations);
    return animations;
}

function heapSortHelper(
    mainArray,
    n,
    animations
) {
    for (let i = n / 2 - 1; i >= 0; i--)
        doHeap(mainArray, n, i, animations);

    for (let i = n - 1; i > 0; i--) {
        let temp = mainArray[0];
        mainArray[0] = mainArray[i];
        mainArray[i] = temp;

        animations.push([[0, i], [1]]);
        animations.push([[0, i], [2]]);
        animations.push([[[0, mainArray[0]], [i, mainArray[i]]], [3]]);

        doHeap(mainArray, i, 0, animations);
    }
}

function doHeap(
    mainArray,
    n,
    i,
    animations,
) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && mainArray[l] > mainArray[largest])
        largest = l;

    if (r < n && mainArray[r] > mainArray[largest])
        largest = r;

    if (largest !== i) {
        let temp = mainArray[i];
        mainArray[i] = mainArray[largest];
        mainArray[largest] = temp;

        animations.push([[i, largest], [1]]);
        animations.push([[i, largest], [2]]);
        animations.push([[[i, mainArray[i]], [largest, mainArray[largest]]], [3]]);

        doHeap(mainArray, n, largest, animations);
    }
}
