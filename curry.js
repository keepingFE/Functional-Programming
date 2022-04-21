// 函数柯里化
// 1、当一个函数有多个参数的时候，先传递一部分参数调用它（这部分参数以后不会改变）;
// 2、然后返回一个新的函数接收剩余的参数，返回结果；
function curry(func) {
    return function curriedFn(...args) {
        // 判断实参（args）个数和形参（func）个数是否相同
        if (args.length < func.length) {
            return function () {
                // 把上次调用的参数和剩余的参数合并到一起传给函数
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        } else {
            return func(...args)
        }
    }
}

// 示例
function getSum(a, b, c) {
    return a + b + c;
}

const curried = curry(getSum)
console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))