const mergeSort = (arr) => {
    const arrLength = arr.length
    if(arrLength < 2) return arr

    let middleIndex = Math.floor(arrLength / 2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex, arrLength);
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    let sorted = [];

    while (sortedLeft.length && sortedRight.length) {
        if (sortedLeft[0] < sortedRight[0]) sorted.push(sortedLeft.shift());
        else sorted.push(sortedRight.shift());
    }

    return [...sorted, ...sortedLeft, ...sortedRight];
}