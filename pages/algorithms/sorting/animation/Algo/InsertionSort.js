import styles from "/styles/sorting.module.css";

const PRIMARY_COLOR = 'dodgerblue';
const SECONDARY_COLOR = 'red';
const FINAL_COLOR = 'limegreen';

export function InsertionSort(Array, SPEED) {
    const ANIMATION_SPEED_MS = SPEED;
    const animations = getInsertionSortAnimations(Array);
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
                barOneStyle.backgroundColor = FINAL_COLOR;
                barTwoStyle.backgroundColor = FINAL_COLOR;
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

function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, array.length, animations);
    return animations;
}

function insertionSortHelper(
    mainArray,
    n,
    animations
) {
    let i, j;
    for (i = 1; i < n; ++i) {
        let temp = mainArray[i];
        for (j = i - 1; (j >= 0 && mainArray[j] <= temp); --j) {
            mainArray[j + 1] = mainArray[j];
            animations.push([[j, j + 1], [1]]);
            animations.push([[j, j + 1], [2]]);
            animations.push([[j + 1, mainArray[j]], [3]]);
        }
        mainArray[j + 1] = temp;
        animations.push([[j + 1, temp], [3]]);
    }
}
