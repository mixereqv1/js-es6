const randomTable = (lng=5, min=0, max=10) => {
    let arr = [];
    for(let i=0; i<lng; i++) {
        arr.push(Math.floor(Math.random() * max-min)) + min;
    }
    return arr;
}
const arr1 = randomTable();
const arr2 = randomTable();
const arr = arr1.concat(arr2);
console.log(`Najwyższa: ${Math.max(...arr)}`);
console.log(`Najmniejsza: ${Math.min(...arr)}`);