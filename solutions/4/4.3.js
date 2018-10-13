function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(elem, list) {
    return { elem, rest: { list } };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return (list.rest, n - 1)
}