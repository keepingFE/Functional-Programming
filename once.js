function once(fn) {
    let done = false;
    return function () {
        if (!done) {
            done = true;
            return fn.apply(this,arguments);
        }
    }
}

// demo
let getNum = once(function(number) {
    console.log(number)
})
getNum(1)
getNum(2)