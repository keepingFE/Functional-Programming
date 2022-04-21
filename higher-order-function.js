// 自定义 forEach
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}

// demo
forEach([1, 2, 3, 4], function (item) {
    console.log(item)
})

// 自定义 filter
function filter(array, fn) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            res.push(array[i])
        }
    }
    return res
}

// demo
let r = filter([1, 2, 3, 4, 5, 6], function (item) {
    return item % 2 === 0
})
console.log(r)