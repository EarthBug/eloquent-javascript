function reverse(arr) {
    let arr2 = []
    for (let i = arr.length - 1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
}

function reverseInPlace(arr) {
    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = old;
    }
}

console.log(reverse(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]