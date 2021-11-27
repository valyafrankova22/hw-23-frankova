function getSum() {
    let arg = 0;
    return function(x) {
        arg += x;
        return arg;
    }
}
let sum = getSum();
console.log(sum(1)); // 1
console.log(sum(3)); // 4
console.log(sum(5)); // 9

