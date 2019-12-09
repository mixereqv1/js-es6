const sum = (a,b) => console.log(a+b);
const myPow = (a) => Math.pow(a);
const hr = () => console.log('-------');
const bigWords = (tab) => {
    const result = [];
    tab.forEach(el => result.push(el.toUpperCase()));
    return result;
}
const sumTab = (tab) => {
    const sum = 0;
    tab.forEach(el => sum += el);
    return sum;
}
const test = () => 'abecadło z pieca spadło';
(() => console.log('Prawie koniec'))();
findFirst = (arr, name) => arr.includes(name);