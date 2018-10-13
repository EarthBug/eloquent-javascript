function range(start, end, step = 1) {
    let arr = [];
    for (let i = start; i <= end; i = i + step)
        arr.push(i);
    return arr;
}

function sum(array) {
    let result = 0;
    for (let entry of array) {
        result += entry;
    }
    return result;
}