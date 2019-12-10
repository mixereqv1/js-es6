const printBig = function() {
    let str = '';
    for(let i in arguments) {
        str += `${arguments[i].toUpperCase()} `;
    }
    console.log(str);
}
printBig('pies','świnka','kot');