const first = function() {
    console.log('Witam serdecznie');
    second(arguments);
}
const second = (arguments) => {
    for(i in arguments) {
        console.log(arguments[i]);
    }
}
first(1,'a',5,2);