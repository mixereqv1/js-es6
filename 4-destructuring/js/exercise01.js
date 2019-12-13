const obj = {
    name : "Marcin",
    surname : "Kowalski",
    age : 20
}
const {name,surname,age: userAge} = obj;
console.log(name);
console.log(surname);
console.log(userAge);