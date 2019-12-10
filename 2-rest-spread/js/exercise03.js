const avg = function() {
    let res = 0;
    for(let i in arguments) {
        res += arguments[i];
    }
    console.log(res / arguments.length); 
}
avg(1,2,3,4);