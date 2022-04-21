// 纯函数优点

// 1、可缓存 lodash 库中的 memoize 方法支持函数缓存；
function memoize(func) {
   let cache = {};
    return function () {
       let key = JSON.stringify(arguments); // 把函数参数作为 cache 键
       cache[key] = cache[key] || func.apply(func, arguments); // 缓存当前函数
       return cache[key];
    }
}

// 测试缓存方法
function getSquareArea(ln) {
   console.log(ln);
   return Math.abs(ln * ln);
}

let getAreaMemoize = memoize(getSquareArea);
console.log(getAreaMemoize(2));
console.log(getAreaMemoize(2));
console.log(getAreaMemoize(2))